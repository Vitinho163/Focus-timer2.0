import { 
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace,
  inputForestVolume,
  inputRainVolume,
  inputCoffeShopVolume,
  inputFireplaceVolume,
} from "./components.js"


export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const SoundForest = new Audio('./music/Floresta.wav')
  const SoundRain = new Audio('./music/Chuva.wav')
  const SoundCoffeeShop = new Audio('./music/Cafeteria.wav')
  const SoundFireplace = new Audio('./music/Lareira.wav')

  SoundForest.loop = true
  SoundRain.loop = true
  SoundCoffeeShop.loop = true
  SoundFireplace.loop = true


  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function musicForest() {
    if(cardForest.classList.contains('active')) {
      SoundForest.play()
    } else {
      SoundForest.pause()
    }
  }

  function musicRain() {
    if(cardRain.classList.contains('active')) {
      SoundRain.play()
    } else {
      SoundRain.pause()
    }
  }

  function musicCoffeShop() {
    if(cardCoffeeShop.classList.contains('active')) {
      SoundCoffeeShop.play()
    } else {
      SoundCoffeeShop.pause()
    }
  }

  function musicFireplace() {
    if(cardFireplace.classList.contains('active')) {
      SoundFireplace.play()
    } else {
      SoundFireplace.pause()
    }
  }

  function setAudioVolume() {
    SoundForest.volume = inputForestVolume.value
    SoundRain.volume = inputRainVolume.value
    SoundCoffeeShop.volume = inputCoffeShopVolume.value
    SoundFireplace.volume = inputFireplaceVolume.value
  }

  function resetVolumeForest() {
    inputForestVolume.value = 0.5
    SoundForest.volume = 0.5
  }

  function resetVolumeRain() {
    inputRainVolume.value = 0.5
    SoundRain.volume = 0.5
  }

  function resetVolumeCoffeShop() {
    inputCoffeShopVolume.value = 0.5
    SoundCoffeeShop.volume = 0.5
  }

  function resetVolumeFireplace() {
    inputFireplaceVolume.value = 0.5
    SoundFireplace.volume = 0.5
  }

  return {
    pressButton,
    timeEnd,
    musicForest,
    musicRain,
    musicCoffeShop,
    musicFireplace,
    setAudioVolume,
    resetVolumeCoffeShop,
    resetVolumeFireplace,
    resetVolumeRain,
    resetVolumeForest
  }
  
}