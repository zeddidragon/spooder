function makeSpider(scene) {
  const spider = BABYLON.MeshBuilder.CreateBox('spider', {}, scene)
  return spider
}

export default makeSpider
