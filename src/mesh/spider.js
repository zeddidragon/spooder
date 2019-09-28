const bodies = {
  lego(scene) {
    const color = new BABYLON.Color4(0.8, 0.3, 0.3)
    const props = {
      width: 2,
      depth: 3,
      height: 1,
      faceColors: Array(6).fill(color),
    }
    return BABYLON.MeshBuilder.CreateBox('spider', props, scene)
  },
}

function makeSpider(loadout, scene) {
  const spider = bodies[loadout.body || 'lego'](scene)
  spider.position.y = 2
  return spider
}

export default makeSpider
