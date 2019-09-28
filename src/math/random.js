var seed = Date.now()

export function setSeed(newSeed) {
  seed = newSeed
}

export default function random() {
  return Math.abs((Math.sin(seed++) * 10000) % 1)
}
