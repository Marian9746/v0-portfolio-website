"use client"

import { useEffect, useRef, useCallback } from "react"

interface MenyConfig {
  position?: "left" | "right" | "top" | "bottom"
  width?: number
  height?: number
  angle?: number
  threshold?: number
  overlap?: number
  transitionDuration?: string
  transitionEasing?: string
  mouse?: boolean
  touch?: boolean
}

interface MenyProps {
  config?: MenyConfig
  menuContent: React.ReactNode
  children: React.ReactNode
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Meny({
  config = {},
  menuContent,
  children,
  isOpen: controlledIsOpen,
  onOpenChange,
}: MenyProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const contentsRef = useRef<HTMLDivElement>(null)
  const coverRef = useRef<HTMLDivElement>(null)
  const isOpenRef = useRef(false)
  const isMouseDownRef = useRef(false)

  const defaultConfig: Required<MenyConfig> = {
    position: "left",
    width: 280,
    height: 300,
    angle: 30,
    threshold: 40,
    overlap: 6,
    transitionDuration: "0.5s",
    transitionEasing: "ease",
    mouse: true,
    touch: true,
  }

  const mergedConfig = { ...defaultConfig, ...config }

  const supports3DTransforms = useCallback(() => {
    if (typeof window === "undefined") return false
    const el = document.createElement("div")
    return (
      "perspective" in el.style ||
      "WebkitPerspective" in el.style ||
      "MozPerspective" in el.style
    )
  }, [])

  const prefix = useCallback((prop: string) => {
    const style = document.createElement("div").style
    const prefixes = ["Webkit", "Moz", "ms", "O", ""]
    for (const prefix of prefixes) {
      const prefixedProp = prefix ? prefix + prop.charAt(0).toUpperCase() + prop.slice(1) : prop
      if (prefixedProp in style) {
        return prefixedProp as keyof CSSStyleDeclaration
      }
    }
    return prop as keyof CSSStyleDeclaration
  }, [])

  const open = useCallback(() => {
    if (isOpenRef.current) return
    isOpenRef.current = true
    onOpenChange?.(true)

    const wrapper = wrapperRef.current
    const menu = menuRef.current
    const contents = contentsRef.current
    const cover = coverRef.current

    if (!wrapper || !menu || contents === null || !cover) return

    wrapper.classList.add("meny-active")
    cover.style.visibility = "visible"
    cover.style.opacity = "1"

    if (supports3DTransforms()) {
      const { position, width, height, angle } = mergedConfig
      const contentsAngle = angle / -2

      let contentsTransform = ""
      switch (position) {
        case "top":
          contentsTransform = `translateY(${height}px) rotateX(${contentsAngle}deg)`
          break
        case "right":
          contentsTransform = `translateX(-${width}px) rotateY(${contentsAngle}deg)`
          break
        case "bottom":
          contentsTransform = `translateY(-${height}px) rotateX(${-contentsAngle}deg)`
          break
        default:
          contentsTransform = `translateX(${width}px) rotateY(${-contentsAngle}deg)`
      }

      contents.style[prefix("transform")] = contentsTransform
      menu.style[prefix("transform")] = ""
    }
  }, [mergedConfig, onOpenChange, prefix, supports3DTransforms])

  const close = useCallback(() => {
    if (!isOpenRef.current) return
    isOpenRef.current = false
    onOpenChange?.(false)

    const wrapper = wrapperRef.current
    const menu = menuRef.current
    const contents = contentsRef.current
    const cover = coverRef.current

    if (!wrapper || !menu || contents === null || !cover) return

    wrapper.classList.remove("meny-active")
    cover.style.visibility = "hidden"
    cover.style.opacity = "0"

    if (supports3DTransforms()) {
      const { position, angle, overlap } = mergedConfig

      let menuTransform = ""
      switch (position) {
        case "top":
          menuTransform = `rotateX(${angle}deg) translateY(-100%) translateY(${overlap}px)`
          break
        case "right":
          menuTransform = `rotateY(${angle}deg) translateX(100%) translateX(-2px) scale(1.01)`
          break
        case "bottom":
          menuTransform = `rotateX(${-angle}deg) translateY(100%) translateY(-${overlap}px)`
          break
        default:
          menuTransform = `translateX(-100%) translateX(${overlap}px) scale(1.01) rotateY(${-angle}deg)`
      }

      contents.style[prefix("transform")] = ""
      menu.style[prefix("transform")] = menuTransform
    }
  }, [mergedConfig, onOpenChange, prefix, supports3DTransforms])

  useEffect(() => {
    if (controlledIsOpen !== undefined) {
      if (controlledIsOpen) {
        open()
      } else {
        close()
      }
    }
  }, [controlledIsOpen, open, close])

  useEffect(() => {
    const menu = menuRef.current
    const contents = contentsRef.current
    const cover = coverRef.current
    const wrapper = wrapperRef.current

    if (!menu || contents === null || !cover || !wrapper) return

    const { position, width, height, angle, overlap, transitionDuration, transitionEasing } =
      mergedConfig

    // Setup wrapper
    wrapper.classList.add(`meny-${position}`)
    wrapper.style.perspective = "800px"

    let contentsTransformOrigin = ""
    switch (position) {
      case "top":
        contentsTransformOrigin = "50% 0"
        break
      case "right":
        contentsTransformOrigin = "100% 50%"
        break
      case "bottom":
        contentsTransformOrigin = "50% 100%"
        break
      default:
        contentsTransformOrigin = "0 50%"
    }
    wrapper.style.perspectiveOrigin = contentsTransformOrigin

    // Setup menu
    menu.style.position = "fixed"
    menu.style.display = "block"
    menu.style.zIndex = "1"

    switch (position) {
      case "top":
        menu.style.width = "100%"
        menu.style.height = `${height}px`
        break
      case "right":
        menu.style.right = "0"
        menu.style.width = `${width}px`
        menu.style.height = "100%"
        break
      case "bottom":
        menu.style.bottom = "0"
        menu.style.width = "100%"
        menu.style.height = `${height}px`
        break
      default:
        menu.style.width = `${width}px`
        menu.style.height = "100%"
    }

    if (supports3DTransforms()) {
      let menuTransformOrigin = ""
      let menuTransformClosed = ""

      switch (position) {
        case "top":
          menuTransformOrigin = "50% 0%"
          menuTransformClosed = `rotateX(${angle}deg) translateY(-100%) translateY(${overlap}px)`
          break
        case "right":
          menuTransformOrigin = "100% 50%"
          menuTransformClosed = `rotateY(${angle}deg) translateX(100%) translateX(-2px) scale(1.01)`
          break
        case "bottom":
          menuTransformOrigin = "50% 100%"
          menuTransformClosed = `rotateX(${-angle}deg) translateY(100%) translateY(-${overlap}px)`
          break
        default:
          menuTransformOrigin = "100% 50%"
          menuTransformClosed = `translateX(-100%) translateX(${overlap}px) scale(1.01) rotateY(${-angle}deg)`
      }

      const transformKey = prefix("transform")
      const transformOriginKey = prefix("transformOrigin")
      const transitionKey = prefix("transition")

      menu.style[transformKey] = menuTransformClosed
      menu.style[transformOriginKey] = menuTransformOrigin
      menu.style[transitionKey] = `all ${transitionDuration} ${transitionEasing}`

      contents.style[transformKey] = ""
      contents.style[transformOriginKey] = contentsTransformOrigin
      contents.style[transitionKey] = `all ${transitionDuration} ${transitionEasing}`
    }

    // Setup cover
    cover.style.position = "absolute"
    cover.style.display = "block"
    cover.style.width = "100%"
    cover.style.height = "100%"
    cover.style.left = "0"
    cover.style.top = "0"
    cover.style.zIndex = "1000"
    cover.style.visibility = "hidden"
    cover.style.opacity = "0"
    cover.style.background = "rgba(0, 0, 0, 0.4)"
    cover.style.transition = `all ${transitionDuration} ${transitionEasing}`

    return () => {
      wrapper.classList.remove(`meny-${position}`)
    }
  }, [mergedConfig, prefix, supports3DTransforms])

  useEffect(() => {
    const { position, width, height, threshold, mouse, touch } = mergedConfig

    const handleMouseDown = () => {
      isMouseDownRef.current = true
    }

    const handleMouseUp = () => {
      isMouseDownRef.current = false
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseDownRef.current || !mouse) return

      const wrapper = wrapperRef.current
      if (!wrapper) return

      const x = event.clientX - wrapper.offsetLeft
      const y = event.clientY - wrapper.offsetTop

      switch (position) {
        case "top":
          if (y > height) close()
          else if (y < threshold) open()
          break
        case "right": {
          const w = wrapper.offsetWidth
          if (x < w - width) close()
          else if (x > w - threshold) open()
          break
        }
        case "bottom": {
          const h = wrapper.offsetHeight
          if (y < h - height) close()
          else if (y > h - threshold) open()
          break
        }
        default:
          if (x > width) close()
          else if (x < threshold) open()
      }
    }

    let touchStartX = 0
    let touchStartY = 0

    const handleTouchStart = (event: TouchEvent) => {
      if (!touch) return
      touchStartX = event.touches[0].clientX
      touchStartY = event.touches[0].clientY
    }

    const handleTouchEnd = (event: TouchEvent) => {
      if (!touch) return

      const touchEndX = event.changedTouches[0].clientX
      const touchEndY = event.changedTouches[0].clientY

      const deltaX = touchEndX - touchStartX
      const deltaY = touchEndY - touchStartY

      const absDeltaX = Math.abs(deltaX)
      const absDeltaY = Math.abs(deltaY)

      if (position === "left" || position === "right") {
        if (absDeltaX > 50 && absDeltaX > absDeltaY) {
          if (position === "left") {
            deltaX > 0 ? open() : close()
          } else {
            deltaX < 0 ? open() : close()
          }
        }
      } else {
        if (absDeltaY > 50 && absDeltaY > absDeltaX) {
          if (position === "top") {
            deltaY > 0 ? open() : close()
          } else {
            deltaY < 0 ? open() : close()
          }
        }
      }
    }

    if (mouse) {
      document.addEventListener("mousedown", handleMouseDown)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("mousemove", handleMouseMove)
    }

    if (touch) {
      document.addEventListener("touchstart", handleTouchStart)
      document.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [mergedConfig, open, close])

  const handleCoverClick = () => {
    close()
  }

  return (
    <div ref={wrapperRef} className="meny-wrapper">
      <div ref={menuRef} className="meny-menu">
        {menuContent}
      </div>
      <div ref={contentsRef} className="meny-contents">
        {children}
        <div ref={coverRef} className="meny-cover" onClick={handleCoverClick} />
      </div>
    </div>
  )
}
