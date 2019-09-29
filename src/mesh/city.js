import random from '../math/random.js'

function rgb() {
  return random() * 0.7 + 0.3
}

function makeCity(w, h, scene) {
  const block = 18
  const spacing = 1.3
  const heightMod = 0.7

  const props = {
    width: (w + 1) * block * spacing,
    height: (h + 1) * block * spacing,
  }
  const city = BABYLON.MeshBuilder.CreatePlane('city', props, scene)
  city.rotation.x = Math.PI * .5

  var mesh, building
  for(var j = 0; j < h; j++) {
    for(var i = 0; i < w; i++) {
      if(random() > 0.8) continue
      if(i >= Math.floor(w * 0.5 - 0.1) && i <= Math.ceil(w * 0.5)) continue
      if(j >= Math.floor(h * 0.5 - 0.1) && j <= Math.ceil(h * 0.5)) continue
      var height = (Math.log10(random() * 100) + random() + 1) * heightMod
      if(random() > 0.94) height *= 2.5
      
      const name = `cityblock${i}-${j}`
      if(mesh) {
        building = mesh.createInstance(name)
      } else {
        const color = new BABYLON.Color4(rgb(), rgb(), rgb())
        const props = {
          width: block,
          depth: block,
          height: block,
          faceColors: Array(6).fill(color),
        }
        mesh = BABYLON.MeshBuilder.CreateBox(name, props, scene)
        building = mesh
      }

      building.scaling.y = height
      building.position.set(
        (i + 0.5 - w * 0.5) * block * spacing,
        height * 0.5 * block,
        (j + 0.5 - h * 0.5) * block * spacing,
      )
    }
  }

  window.building = building

  return city
}

export default makeCity
