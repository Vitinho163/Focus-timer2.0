import './toggle-mode.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Events from './events.js'
import Sound from './sounds.js'

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  minutesDisplay,
  secondsDisplay,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace,
  inputFireplaceVolume,
  inputCoffeShopVolume,
  inputRainVolume,
  inputForestVolume,
} from './components.js'

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  controls,
  sound, 
  timer,
  inputFireplaceVolume,
  inputCoffeShopVolume,
  inputRainVolume,
  inputForestVolume,
})
