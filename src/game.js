import makeCity from './mesh/city.js'
import makeSpider from './mesh/spider.js'
import updateFps from './dbg/fps.js'

const canvas = document.getElementById('render-canvas')
const engine = new BABYLON.Engine(canvas, true)

function createScene() {
  const scene = new BABYLON.Scene(engine)
  const camera = new BABYLON.ArcRotateCamera(
    'camera',
    Math.PI * 0.1,
    Math.PI * 0.3,
    8,
    new BABYLON.Vector3.Zero(),
    scene,
  )
  camera.attachControl(canvas, true)

  const light1Pos = new BABYLON.Vector3(100, 100, 0)
  const light1 = new BABYLON.HemisphericLight('light', light1Pos, scene)
  const light2Pos = new BABYLON.Vector3(0, 50, -50)
  const light2 = new BABYLON.PointLight('light2', light2Pos, scene)

  const city = makeCity(96, 64, scene)
  const loadout = {
    body: 'lego',
    lwing: 'rocket',
    rwing: 'rocket',
    fang: 'mg',
    tail: 'railgun',
    legs: 'legs',
  }
  const spider = makeSpider(loadout, scene)
  window.spider = spider

  return scene
}

const scene = createScene()
engine.runRenderLoop(scene.render.bind(scene))
window.addEventListener('resize', () => engine.resize())

updateFps(engine)

window.scene = scene
window.camera = scene.cameras[0]
