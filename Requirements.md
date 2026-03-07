Act as an expert Frontend Developer UI/UX. Build a mobile-first, romantic, and poetic single-page application for International Women's Day (March 8th) meant to be viewed on a mobile phone. The final output must be ready to deploy on Vercel.

Tech Stack: Next.js (React), Tailwind CSS, Framer Motion, and Lucide React (for icons).

Core Workflow & Requirements:

Phase 1: The Lock Screen (Night Theme)

Background: Deep night sky gradient (dark blue to deep purple) with subtle, slowly pulsing CSS stars.

UI: A glassmorphism container centering a prompt in Vietnamese: "Một bí mật nhỏ đang đợi em. Nhập mật mã để mở khóa bầu trời này..."

PIN Pad: A custom 10-digit (0-9) keypad. Use glassmorphism for buttons. When a button is pressed, it should have a subtle scale-down effect and a soft glow.

Logic: Hardcode the correct PIN (e.g., '0803'). Show a series of 4 empty glowing dots that fill up as numbers are pressed. If incorrect, vibrate/shake the dots and reset.

Phase 2: The Transition (Dawn effect)

When the correct PIN is entered, use Framer Motion to fade out the keypad and lock screen elements.

Animate the background gradient smoothly transitioning from the dark night sky to a warm, soft dawn (pastel pink and soft peach).

Phase 3: The Romantic Unlocking (Main Content)

Falling Petals: Implement a lightweight CSS or Framer Motion animation of cherry blossom petals continuously falling slowly from the top of the screen.

Music Toggle: A floating button at the top right (using a Lucide music icon) to toggle an HTML audio element (leave the src as placeholder /music.mp3).

Polaroid Gallery: Display 3-4 images in a vertical scroll. Style them as Polaroid pictures (white borders, subtle shadow). Use Framer Motion to animate them sliding up and fading in sequentially (staggerChildren). Add a slight alternating rotation (rotate-2, -rotate-3) to make them look organic. (Use placeholder image URLs like Unsplash for now).

Typewriter Message: Below the images, implement a typewriter effect that slowly types out a romantic Vietnamese paragraph: "Chúc em một ngày 8/3 thật dịu dàng. Bầu trời này, những bông hoa này là dành cho em. Hãy luôn mỉm cười như những vì sao lấp lánh nhé."

Final Interaction: At the very bottom, a glowing, pulse-animated button that says "Chạm vào anh". When clicked, trigger a burst of small floating hearts exploding from the button (using Framer Motion or a simple particle effect).

Constraints:

Ensure perfect responsiveness for mobile (min-h-screen, w-full, max-width constraints for content).

Use high-quality typography (serif for headings to feel poetic, sans-serif for readable text).

Keep the code clean, modularized into smaller React components if necessary, and strictly follow Next.js app router structure.