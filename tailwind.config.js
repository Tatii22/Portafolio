/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      scale: {
        102: "1.02",
      },
      keyframes: {
        "project-in-next": {
          "0%": { opacity: "0", transform: "translateX(28px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        "project-in-prev": {
          "0%": { opacity: "0", transform: "translateX(-28px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        "project-media": {
          "0%": { opacity: "0", transform: "scale(1.04)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "project-image-float": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-8px) scale(1.015)" },
        },
        "modal-in": {
          "0%": { opacity: "0", transform: "scale(0.94) translateY(18px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "tech-badge": {
          "0%": {
            opacity: "0",
            transform: "translateY(12px) scale(0.88)",
            filter: "blur(4px)",
          },
          "70%": {
            opacity: "1",
            transform: "translateY(-2px) scale(1.04)",
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0)",
          },
        },
        "skill-card": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px) scale(0.96)",
            filter: "blur(6px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0)",
          },
        },
        "skill-chip": {
          "0%": {
            opacity: "0",
            transform: "translateX(-12px) scale(0.92)",
          },
          "70%": {
            opacity: "1",
            transform: "translateX(2px) scale(1.03)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) scale(1)",
          },
        },
        "avatar-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1.5deg)" },
        },
        "avatar-pulse": {
          "0%, 100%": {
            opacity: "0.55",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.08)",
          },
        },
        "avatar-spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "project-in-next": "project-in-next 420ms ease-out both",
        "project-in-prev": "project-in-prev 420ms ease-out both",
        "project-media": "project-media 520ms ease-out both",
        "project-image-float": "project-image-float 5.5s ease-in-out infinite",
        "modal-in": "modal-in 260ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "tech-badge": "tech-badge 520ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "skill-card": "skill-card 620ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "skill-chip": "skill-chip 460ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "avatar-float": "avatar-float 4.8s ease-in-out infinite",
        "avatar-pulse": "avatar-pulse 3.2s ease-in-out infinite",
        "avatar-spin-slow": "avatar-spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
