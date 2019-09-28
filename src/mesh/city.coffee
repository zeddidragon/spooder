import random from '../math/random.js'

rgb = ->
  random() * 0.7 + 0.3

makeCity = (scene, w, h) ->
  block = 12
  spacing = 1.65

  city = BABYLON.MeshBuilder.CreatePlane 'city',
    width: (w + 1) * block * spacing
    height: (h + 1) * block * spacing
    scene
  city.rotation.x = Math.PI * .5

  for j in [0...h]
    for i in [0...w]
      continue if random() > 0.8
      continue if i >= Math.floor(w * 0.5 - 0.1) and i <= Math.ceil(w * 0.5)
      continue if j >= Math.floor(h * 0.5 - 0.1) and j <= Math.ceil(h * 0.5)
      height = Math.log10(random() * 100) + random() + 1
      height *= 2 if random() > 0.94
      color = new BABYLON.Color4 rgb(), rgb(), rgb()
      building = BABYLON.MeshBuilder.CreateBox "block#{i},#{j}",
        width: block
        depth: block
        height: height * block
        faceColors: [color, color, color, color, color, color]
        scene
      building.position.x = (i + .5 - w * .5) * block * spacing
      building.position.z = (j + .5 - h * .5) * block * spacing
      building.position.y = height * .5 * block

  city

export default makeCity
