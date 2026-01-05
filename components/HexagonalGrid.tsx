'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    Grid1Background?: any
  }
}

export default function HexagonalGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<any>(null)
  const mouseHandlerRef = useRef<((e: MouseEvent) => void) | null>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    // Only run in light mode
    if (document.documentElement.classList.contains('dark')) {
      return
    }

    if (!canvasRef.current || !containerRef.current) return

    const initGrid = () => {
      if (!canvasRef.current || !window.Grid1Background || !containerRef.current) return

      try {
        // Initialize the grid background
        const bg = window.Grid1Background(canvasRef.current)
        bgRef.current = bg

        // Set black background for the scene
        if (bg.scene && bg.scene.background !== undefined) {
          // Try to set black background
          try {
            const THREE = (window as any).THREE
            if (THREE && THREE.Color) {
              bg.scene.background = new THREE.Color(0x000000) // Black background
            }
          } catch (e) {
            // Background setting may not be available, that's okay
          }
        }

        // Set black hexagon colors with green lighting for better text readability
        if (bg.grid) {
          // Black hexagons: very dark colors
          bg.grid.setColors([0x000000, 0x0a0a0a, 0x1a1a1a])
          // Green lights on black hexagons - gather green
          if (bg.grid.light1) {
            bg.grid.light1.color.set(0x10b981) // Gather green light
            bg.grid.light1.intensity = 500 // Higher intensity to show green on black
          }
          if (bg.grid.light2) {
            bg.grid.light2.color.set(0x10b981) // Gather green light
            bg.grid.light2.intensity = 300 // Higher intensity
          }
        }

        // Add mouse move interaction
        const handleMouseMove = (e: MouseEvent) => {
          if (!containerRef.current || !bg.grid) return
          
          const rect = containerRef.current.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
          const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
          
          // Update grid camera based on mouse position for parallax effect
          if (bg.grid.camera) {
            bg.grid.camera.position.x += (x * 2 - bg.grid.camera.position.x) * 0.05
            bg.grid.camera.position.y += (y * 2 - bg.grid.camera.position.y) * 0.05
          }
        }

        mouseHandlerRef.current = handleMouseMove
        containerRef.current.addEventListener('mousemove', handleMouseMove)
      } catch (error) {
        console.error('Error initializing hexagonal grid:', error)
      }
    }

    // Load the module script
    if (!scriptLoaded.current) {
      scriptLoaded.current = true
      const script = document.createElement('script')
      script.type = 'module'
      script.textContent = `
        import Grid1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js';
        window.Grid1Background = Grid1Background;
        if (window.onGridLoaded) window.onGridLoaded();
      `
      window.onGridLoaded = () => {
        if (canvasRef.current) {
          initGrid()
        }
      }
      document.head.appendChild(script)
    } else if (window.Grid1Background) {
      // Module already loaded
      initGrid()
    }

    // Listen for module load event
    const handleGridLoaded = () => {
      if (canvasRef.current) {
        initGrid()
      }
    }
    window.addEventListener('gridModuleLoaded', handleGridLoaded)

    return () => {
      window.removeEventListener('gridModuleLoaded', handleGridLoaded)
      // Cleanup mouse event listener
      if (containerRef.current && mouseHandlerRef.current) {
        containerRef.current.removeEventListener('mousemove', mouseHandlerRef.current)
        mouseHandlerRef.current = null
      }
      // Cleanup grid
      if (bgRef.current && bgRef.current.dispose) {
        bgRef.current.dispose()
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden dark:hidden bg-black"
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        id="webgl-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />
    </div>
  )
}
