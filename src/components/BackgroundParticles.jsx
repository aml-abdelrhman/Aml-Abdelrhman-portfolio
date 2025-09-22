import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // ✅ نراقب أي تغيير على class للـ html
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={async (main) => await loadFull(main)}
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 3 },
          },
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 900 },
          },
          color: {
            value: isDarkMode
              ? ["#FF6EC7", "#00D9FF", "#FFD166", "#8AFF80"] // ألوان فاتحة للوضع الداكن
              : ["#1E3A8A", "#2563EB", "#9333EA", "#DC2626"], // ألوان غامقة للوضع الفاتح
          },
          shape: { type: "circle" },
          opacity: {
            value: 0.6,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false },
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.5, sync: false },
          },
          links: {
            enable: true,
            distance: 150,
            color: isDarkMode ? "#ffffff" : "#000000",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
