import { sharkSrc } from "./sharkSrc";
import(
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.3/dist/confetti.browser.js"
).then(() => {
  // canvas-confetti docs: https://www.kirilv.com/canvas-confetti/
  // Command for creating confetti.
  aha.on("aha-develop.confetti-when-done.confetti", () => {
    window.confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.7 },
      zIndex: 10000,
      useWorker: false,
    });
  });
});

aha.on("percyhanna.sprint-shark", () => {
  const img = document.createElement("img");
  img.src = sharkSrc;
  $(img).css({
    position: "fixed",
    left: "50vh",
    top: "25vh",
    height: "50vh",
    zIndex: 10000,
  });

  $("body").append(img);

  setTimeout(() => img.remove(), 5000);
});

// Bind Command to 'shipped' event.
aha.on({ event: "aha.sprint-planner.completed-sprint" }, () => {
  aha.executeCommand("aha-develop.confetti-when-done.confetti");
  aha.executeCommand("percyhanna.sprint-shark");
});
