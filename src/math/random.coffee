seed = Date.now()
random = ->
  Math.abs((Math.sin(seed++) * 10000) % 1)

export default random

export setSeed = (newSeed) ->
  seed = newSeed
