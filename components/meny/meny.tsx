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
  isOpen = false,
  onOpenChange,
}: MenyProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const contentsRef = useRef<HTMLDivElement>(null)
  const coverRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  // Default configuration
  const defaultConfig = {
    position: "left" as const,
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
  const { position, width, height, angle, threshold, overlap } = mergedConfig

  // Calculate transforms based on position and angle
  const transforms = {
    menuOrigin: "100% 50%",
    contentsOrigin: "0% 50%",
    menuClosed: `translateX(-100%) translateX(${overlap}px) rotateY(-${angle}deg)`,
    menuOpened: "translateX(0) rotateY(0deg)",
    contentsClosed: "translateX(0) rotateY(0deg)",
    contentsOpened: `translateX(${width}px) rotateY(-${angle / 2}deg)`,
  }

  const open = useCallback(() => {
    if (!isOpen) {
      console.log('Meny: Opening menu')
      onOpenChange?.(true)
    }
  }, [onOpenChange, isOpen])

  const close = useCallback(() => {
    if (isOpen) {
      console.log('Meny: Closing menu')
      onOpenChange?.(false)
    }
  }, [onOpenChange, isOpen])

  // Debug effect to track state changes
  useEffect(() => {
    console.log('Meny: isOpen state changed to:', isOpen)
  }, [isOpen])

  // Apply transforms and styles when open state changes
  useEffect(() => {
    const wrapper = wrapperRef.current
    const menu = menuRef.current
    const contents = contentsRef.current
    const cover = coverRef.current

    if (!wrapper || !menu || !contents || !cover) {
      console.log('Missing refs:', { wrapper, menu, contents, cover })
      return
    }

    console.log('Applying state changes, isOpen:', isOpen)

    // Apply state changes
    if (isOpen) {
      wrapper.classList.add("meny-active")
      cover.style.visibility = "visible"
      cover.style.opacity = "1"
      cover.style.pointerEvents = "auto"
      menu.style.transform = transforms.menuOpened
      contents.style.transform = transforms.contentsOpened
      console.log('Applied open transforms:', { menu: transforms.menuOpened, contents: transforms.contentsOpened })
    } else {
      wrapper.classList.remove("meny-active")
      cover.style.visibility = "hidden"
      cover.style.opacity = "0"
      cover.style.pointerEvents = "none"
      menu.style.transform = transforms.menuClosed
      contents.style.transform = transforms.contentsClosed
      console.log('Applied closed transforms:', { menu: transforms.menuClosed, contents: transforms.contentsClosed })
    }
  }, [isOpen, transforms])

  // Initial setup and styling - only run once
  useEffect(() => {
    if (!isFirstRender.current) return
    
    console.log('Meny: Setting up initial styles...')
    const wrapper = wrapperRef.current
    const menu = menuRef.current
    const contents = contentsRef.current
    const cover = coverRef.current

    if (!wrapper || !menu || !contents || !cover) {
      console.log('Missing refs in setup:', { wrapper, menu, contents, cover })
      return
    }
    
    isFirstRender.current = false

    // Setup 3D context
    wrapper.style.perspective = "800px"
    wrapper.style.perspectiveOrigin = transforms.contentsOrigin

    // Setup menu
    menu.style.position = "fixed" 
    menu.style.top = "0"
    menu.style.left = "0"
    menu.style.width = `${width}px`
    menu.style.height = "100vh"
    menu.style.zIndex = "2000"
    menu.style.transformOrigin = transforms.menuOrigin
    menu.style.transition = `transform ${mergedConfig.transitionDuration} ${mergedConfig.transitionEasing}`
    menu.style.transform = transforms.menuClosed
    menu.style.backfaceVisibility = "hidden"
    menu.style.willChange = "transform"

    // Setup contents
    contents.style.transformOrigin = transforms.contentsOrigin
    contents.style.transition = `transform ${mergedConfig.transitionDuration} ${mergedConfig.transitionEasing}`
    contents.style.transform = transforms.contentsClosed
    contents.style.transformStyle = "preserve-3d"

    // Setup cover overlay
    cover.style.position = "absolute"
    cover.style.top = "0"
    cover.style.left = "0" 
    cover.style.width = "100%"
    cover.style.height = "100%"
    cover.style.background = "rgba(0, 0, 0, 0.4)"
    cover.style.zIndex = "1999"
    cover.style.visibility = "hidden"
    cover.style.opacity = "0"
    cover.style.transition = `opacity ${mergedConfig.transitionDuration} ${mergedConfig.transitionEasing}`
    cover.style.cursor = "pointer"
    cover.style.pointerEvents = "none"

    console.log('Meny: Initial setup completed with config:', { width, height, angle, threshold })
  }, [width, height, transforms, mergedConfig])

  // Mouse hover detection on left edge
  useEffect(() => {
    if (!mergedConfig.mouse) return

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX
      
      // Debug log to see mouse position
      if (x < 10) console.log('Mouse near left edge:', x)
      
      // Open when hovering near left edge
      if (x < threshold && !isOpen) {
        console.log('Should open menu - x:', x, 'threshold:', threshold, 'isOpen:', isOpen)
        open()
      }
      // Close when moving away from menu area
      else if (x > width + 50 && isOpen) {
        console.log('Should close menu - x:', x, 'width:', width, 'isOpen:', isOpen)
        close()
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mergedConfig.mouse, threshold, width, isOpen, open, close])

  // Touch swipe detection
  useEffect(() => {
    if (!mergedConfig.touch) return

    let startX = 0
    let startY = 0
    let isDragging = false

    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX
      startY = event.touches[0].clientY
      isDragging = false
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (!isDragging) {
        const deltaX = event.touches[0].clientX - startX
        const deltaY = event.touches[0].clientY - startY
        
        // Only respond to horizontal swipes
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          isDragging = true
          
          // Swipe right from left edge to open
          if (deltaX > threshold && startX < 100 && !isOpen) {
            open()
            event.preventDefault()
          }
          // Swipe left to close
          else if (deltaX < -threshold && isOpen) {
            close()
            event.preventDefault()
          }
        }
      }
    }

    const handleTouchEnd = (event: TouchEvent) => {
      // Tap outside menu to close
      if (!isDragging && isOpen && startX > width) {
        close()
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
  }, [mergedConfig.touch, threshold, width, isOpen, open, close])

  return (
    <div ref={wrapperRef} className="meny-wrapper">
      <div ref={menuRef} className="meny-menu">
        {menuContent}
      </div>
      <div ref={contentsRef} className="meny-contents">
        {children}
        <div ref={coverRef} className="meny-cover" onClick={close} />
      </div>
    </div>
  )
}
