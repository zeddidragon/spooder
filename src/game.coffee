import makeCity from './mesh/city.js'
import makeSpider from './mesh/spider.js'

canvas = document.getElementById 'renderCanvas'
engine = new BABYLON.Engine canvas, true

createScene = ->
    scene = new BABYLON.Scene engine
    camera = new BABYLON.ArcRotateCamera 'camera',
      Math.PI * 0.1
      Math.PI * 0.3
      8
      new BABYLON.Vector3.Zero()
      scene
    window.camera = camera
    camera.attachControl canvas, true

    light1 = new BABYLON.HemisphericLight 'light1',
      new BABYLON.Vector3(1, 1, 0)
      scene
    light2 = new BABYLON.PointLight 'light2',
      new BABYLON.Vector3(0, 1, -1)
      scene

    city = makeCity scene, 16, 16
    spider = makeSpider scene
    scene

window.scene = createScene()
engine.runRenderLoop -> scene.render()
window.addEventListener 'resize', -> engine.resize()
