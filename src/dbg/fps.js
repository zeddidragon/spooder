const fpsCounter = document.getElementById('debug-fps')

export default function updateFps(engine) {
  setInterval(function() {
    fpsCounter.textContent = Math.floor(engine.getFps())
  }, 150)
}
