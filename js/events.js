export default function events({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  controls,
  timer,
  sound,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  inputFireplaceVolume,
  inputCoffeShopVolume,
  inputRainVolume,
  inputForestVolume,
}) {

  buttonPlay.addEventListener('click', function() {
    sound.pressButton()
    timer.countdown()
    controls.playPauseTimer()
  })

  buttonPause.addEventListener('click', function() {
    sound.pressButton()
    timer.hold()
    controls.playPauseTimer()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonPlus.addEventListener('click', function() {
    controls.reset()
    timer.increase()
    sound.pressButton()
  })

  buttonMinus.addEventListener('click', function() {
    controls.reset()
    timer.decrease()
    sound.pressButton()
  })

  buttonSoundForest.addEventListener('click', function() {
    controls.SoundForest()
    sound.pressButton()
    sound.musicForest()
    sound.resetVolumeForest()
  })

  buttonSoundRain.addEventListener('click', function() {
    controls.SoundRain()
    sound.pressButton()
    sound.musicRain()
    sound.resetVolumeRain()
  })

  buttonSoundCoffeeShop.addEventListener('click', function() {
    controls.SoundCoffeeShop()
    sound.pressButton()
    sound.musicCoffeShop()
    sound.resetVolumeCoffeShop()
  })

  buttonSoundFireplace.addEventListener('click', function() {
    controls.SoundFireplace()
    sound.pressButton()
    sound.musicFireplace()
    sound.resetVolumeFireplace()
  })

  inputForestVolume.addEventListener('input', sound.setAudioVolume)
  inputRainVolume.addEventListener('input', sound.setAudioVolume)
  inputCoffeShopVolume.addEventListener('input', sound.setAudioVolume)
  inputFireplaceVolume.addEventListener('input', sound.setAudioVolume)
}