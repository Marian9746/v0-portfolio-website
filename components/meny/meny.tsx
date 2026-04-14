"use client"

import { useEffect, useRef, useCallback, useState } from "react"

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
  gradient?: string
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
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isMouseDownRef = useRef(false)
  const touchStartRef = useRef({ x: 0, y: 0 })
  const touchMoveRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null })

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen

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
    gradient: "rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.65) 100%)",
  }

  const mergedConfig = { ...defaultConfig, ...config }
  const { position, width, height, angle, threshold, overlap, transitionDuration, transitionEasing } = mergedConfig

  // Calculate transform values
  const menuAngle = angle
  const contentsAngle = angle / -2

  // Get transforms based on position
  const getTransforms = useCallback(() => {
    let menuTransformOrigin = ""
    let menuTransformClosed = ""
    let menuTransformOpened = ""
    let contentsTransformOrigin = ""
    let contentsTransformClosed = ""
    let contentsTransformOpened = ""

    switch (position) {
      case "top":
        menuTransformOrigin = "50% 0%"
        menuTransformClosed = `rotateX(${menuAngle}deg) translateY(-100%) translateY(${overlap}px)`
        menuTransformOpened = ""
        contentsTransformOrigin = "50% 0"
        contentsTransformClosed = ""
        contentsTransformOpened = `translateY(${height}px) rotateX(${contentsAngle}deg)`
        break

      case "right":
        menuTransformOrigin = "100% 50%"
        menuTransformClosed = `rotateY(${menuAngle}deg) translateX(100%) translateX(-2px) scale(1.01)`
        menuTransformOpened = ""
        contentsTransformOrigin = "100% 50%"
        contentsTransformClosed = ""
        contentsTransformOpened = `translateX(-${width}px) rotateY(${contentsAngle}deg)`
        break

      case "bottom":
        menuTransformOrigin = "50% 100%"
        menuTransformClosed = `rotateX(${-menuAngle}deg) translateY(100%) translateY(-${overlap}px)`
        menuTransformOpened = ""
        contentsTransformOrigin = "50% 100%"
        contentsTransformClosed = ""
        contentsTransformOpened = `translateY(-${height}px) rotateX(${-contentsAngle}deg)`
        break

      default: // left
        menuTransformOrigin = "100% 50%"
        menuTransformClosed = `translateX(-100%) translateX(${overlap}px) scale(1.01) rotateY(${-menuAngle}deg)`
        menuTransformOpened = ""
        contentsTransformOrigin = "0 50%"
        contentsTransformClosed = ""
        contentsTransformOpened = `translateX(${width}px) rotateY(${-contentsAngle}deg)`
    }

    return {
      menuTransformOrigin,
      menuTransformClosed,
      menuTransformOpened,
      contentsTransformOrigin,
      contentsTransformClosed,
      contentsTransformOpened,
    }
  }, [position, menuAngle, contentsAngle, width, height, overlap])

  const transforms = getTransforms()

  const setOpenState = useCallback((open: boolean) => {
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(open)
    }
    onOpenChange?.(open)
  }, [controlledIsOpen, onOpenChange])

  const open = useCallback(() => {
    if (isOpen) return
    setOpenState(true)
  }, [isOpen, setOpenState])

  const close = useCallback(() => {
    if (!isOpen) return
    setOpenState(false)
  }, [isOpen, setOpenState])

  // Apply visual changes based on open state
  useEffect(() => {
    const wrapper = wrapperRef.current
    const menu = menuRef.current
    const contents = contentsRef.current
    const cover = coverRef.current

    if (!wrapper || !menu || !contents || !cover) return

    if (isOpen) {
      wrapper.classList.add("meny-active")
      cover.style.height = `${contents.scrollHeight}px`
      cover.style.visibility = "visible"
      cover.style.opacity = "1"
      contents.style.transform = transforms.contentsTransformOpened
      menu.style.transform = transforms.menuTransformOpened
    } else {
      wrapper.classList.remove("meny-active")
      cover.style.visibility = "hidden"
      cover.style.opacity = "0"
      contents.style.transform = transforms.contentsTransformClosed
      menu.style.transform = transforms.menuTransformClosed
    }
  }, [isOpen, transforms])

  // Initial setup
  useEffect(() => {
    const wrapper = wrapperRef.current
    const menu = menuRef.current
    const contents = contentsRef.current
    const cover = coverRef.current

    if (!wrapper || !menu || !contents || !cover) return

    // Setup wrapper
    wrapper.style.perspective = "800px"
    wrapper.style.perspectiveOrigin = transforms.contentsTransformOrigin

    // Setup menu dimensions
    switch (position) {
      case "top":
        menu.style.width = "100%"
        menu.style.height = `${height}px`
        menu.style.top = "0"
        menu.style.left = "0"
        break
      case "right":
        menu.style.width = `${width}px`
        menu.style.height = "100%"
        menu.style.top = "0"
        menu.style.right = "0"
        break
      case "bottom":
        menu.style.width = "100%"
        menu.style.height = `${height}px`
        menu.style.bottom = "0"
        menu.style.left = "0"
        break
      default: // left
        menu.style.width = `${width}px`
        menu.style.height = "100%"
        menu.style.top = "0"
        menu.style.left = "0"
    }

    // Setup menu transforms
    menu.style.position = "fixed"
    menu.style.zIndex = "1"
    menu.style.transformOrigin = transforms.menuTransformOrigin
    menu.style.transition = `all ${transitionDuration} ${transitionEasing}`
    menu.style.transform = transforms.menuTransformClosed
    menu.style.backfaceVisibility = "hidden"

    // Setup contents transforms
    contents.style.transformOrigin = transforms.contentsTransformOrigin
    contents.style.transition = `all ${transitionDuration} ${transitionEasing}`
    contents.style.transform = transforms.contentsTransformClosed
    contents.style.transformStyle = "preserve-3d"

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
    cover.style.background = `linear-gradient(to ${position === "left" ? "right" : position === "right" ? "left" : position === "top" ? "bottom" : "top"}, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.65) 100%)`
    cover.style.transition = `all ${transitionDuration} ${transitionEasing}`
    cover.style.cursor = "pointer"

  }, [position, width, height, transitionDuration, transitionEasing, transforms])

  // Mouse events
  useEffect(() => {
    if (!mergedConfig.mouse) return

    const handleMouseDown = () => {
      isMouseDownRef.current = true
    }

    const handleMouseUp = () => {
      isMouseDownRef.current = false
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseDownRef.current) return

      const wrapper = wrapperRef.current
      if (!wrapper) return

      const rect = wrapper.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

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
        default: // left
          if (x > width) close()
          else if (x < threshold) open()
      }
    }

    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [position, width, height, threshold, mergedConfig.mouse, open, close])

  // Touch events
  useEffect(() => {
    if (!mergedConfig.touch) return

    const handleTouchStart = (event: TouchEvent) => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const rect = wrapper.getBoundingClientRect()
      touchStartRef.current = {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top,
      }
      touchMoveRef.current = { x: null, y: null }
    }

    const handleTouchMove = (event: TouchEvent) => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const rect = wrapper.getBoundingClientRect()
      touchMoveRef.current = {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top,
      }

      const deltaX = touchMoveRef.current.x! - touchStartRef.current.x
      const deltaY = touchMoveRef.current.y! - touchStartRef.current.y

      // Detect swipe direction
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < -threshold) {
          // Swipe left
          if (position === "right" && isOpen) {
            close()
            event.preventDefault()
          } else if (position === "left" && !isOpen) {
            // Do nothing - wrong direction
          }
        } else if (deltaX > threshold) {
          // Swipe right
          if (position === "left" && !isOpen) {
            open()
            event.preventDefault()
          } else if (position === "right" && isOpen) {
            // Do nothing - wrong direction
          } else if (position === "left" && isOpen) {
            close()
            event.preventDefault()
          }
        }
      } else {
        if (deltaY < -threshold) {
          // Swipe up
          if (position === "bottom" && isOpen) {
            close()
            event.preventDefault()
          } else if (position === "top" && !isOpen) {
            open()
            event.preventDefault()
          }
        } else if (deltaY > threshold) {
          // Swipe down
          if (position === "top" && isOpen) {
            close()
            event.preventDefault()
          } else if (position === "bottom" && !isOpen) {
            open()
            event.preventDefault()
          }
        }
      }
    }

    const handleTouchEnd = () => {
      // If no movement, treat as tap
      if (touchMoveRef.current.x === null && touchMoveRef.current.y === null) {
        const { x, y } = touchStartRef.current
        const wrapper = wrapperRef.current
        if (!wrapper) return

        const isOverContent =
          (position === "top" && y > height) ||
          (position === "right" && x < wrapper.offsetWidth - width) ||
          (position === "bottom" && y < wrapper.offsetHeight - height) ||
          (position === "left" && x > width)

        if (isOverContent && isOpen) {
          close()
        }
      }
    }

    document.addEventListener("touchstart", handleTouchStart, { passive: true })
    document.addEventListener("touchmove", handleTouchMove, { passive: false })
    document.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [position, width, height, threshold, mergedConfig.touch, isOpen, open, close])

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
