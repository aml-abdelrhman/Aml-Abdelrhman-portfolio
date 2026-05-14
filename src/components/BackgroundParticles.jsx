import React, { useState, useEffect } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function BackgroundParticles() {
  const [isDark, setIsDark] = useState(!document.documentElement.classList.contains('light'))

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(!document.documentElement.classList.contains('light'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={async (main) => await loadFull(main)}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.3 } },
            push: { quantity: 2 },
          },
        },
        particles: {
          number: { value: 50, density: { enable: true, area: 1000 } },
          color: {
            value: isDark ? ['#c9a96e', '#8a6e3c', '#e8e0d0'] : ['#8a5e20', '#5c3d10', '#1a1612'],
          },
          shape: { type: 'circle' },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.05 },
          },
          size: {
            value: { min: 1, max: 2 },
            random: true,
          },
          links: {
            enable: true,
            distance: 180,
            color: isDark ? '#c9a96e' : '#8a5e20',
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            outModes: { default: 'out' },
          },
        },
        detectRetina: true,
      }}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}