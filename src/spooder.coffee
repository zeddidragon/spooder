canvas = document.getElementById 'renderCanvas'
engine = new BABYLON.Engine canvas, true

createScene = ->
    scene = new BABYLON.Scene engine
    camera = new BABYLON.ArcRotateCamera ...[
      'Camera'
      Math.PI / 2
      Math.PI / 2
      2
      new BABYLON.Vector3(0,0,5)
      scene
    ]
    camera.attachControl canvas, true

    light1 = new BABYLON.HemisphericLight ...[
      'light1',
      new BABYLON.Vector3(1, 1, 0),
      scene
    ]
    light2 = new BABYLON.PointLight ...[
      'light2'
      new BABYLON.Vector3(0, 1, -1)
      scene
    ]

    sphere = BABYLON.MeshBuilder.CreateSphere ...[
      'sphere'
      diameter: 2
      scene
    ]

    scene

scene = createScene()
engine.runRenderLoop -> scene.render()
window.addEventListener 'resize', -> engine.resize()
