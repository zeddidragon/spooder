import random from '../math/random.js'

function rgb() {
  return random() * 0.7 + 0.3
}

function makeCity(w, h, scene) {
  const block = 12
  const spacing = 1.65

  const props = {
    width: (w + 1) * block * spacing,
    height: (h + 1) * block * spacing,
  }
  const city = BABYLON.MeshBuilder.CreatePlane('city', props, scene)
  city.rotation.x = Math.PI * .5

  for(var j = 0; j < h; j++) {
    for(var i = 0; i < w; i++) {
      if(random() > 0.8) continue
      if(i >= Math.floor(w * 0.5 - 0.1) && i <= Math.ceil(w * 0.5)) continue
      if(j >= Math.floor(h * 0.5 - 0.1) && j <= Math.ceil(h * 0.5)) continue
      var height = Math.log10(random() * 100) + random() + 1
      if(random() > 0.94) height *= 2.5
      const color = new BABYLON.Color4(rgb(), rgb(), rgb())

      const name = `cityblock${i}-${j}`
      const props = {
        width: block,
        depth: block,
        height: height * block,
        faceColors: Array(6).fill(color),
      }
      const building = BABYLON.MeshBuilder.CreateBox(name, props, scene)
      building.position.set(
        (i + 0.5 - w * 0.5) * block * spacing,
        height * 0.5 * block,
        (j + 0.5 - h * 0.5) * block * spacing,
      )
    }
  }

  return city
}

export default makeCity
