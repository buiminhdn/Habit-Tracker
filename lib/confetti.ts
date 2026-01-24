import confetti from "canvas-confetti";

export const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { y: 0.6 },
    colors: ["#000000", "#71717a", "#a1a1aa"],
  });
};
