const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMinus = document.querySelector('.decrease')
const buttonPlus = document.querySelector(".increase")
const buttonSoundForest = document.querySelector('.sound-forest')
const buttonSoundRain = document.querySelector('.sound-rain')
const buttonSoundCoffeeShop = document.querySelector('.sound-coffee-shop')
const buttonSoundFireplace = document.querySelector('.sound-fireplace')

const cardForest = document.querySelector('.card-forest')
const cardRain = document.querySelector('.card-rain')
const cardCoffeeShop = document.querySelector('.card-coffe-shop')
const cardFireplace = document.querySelector('.card-fireplase')

const inputForestVolume = document.querySelector('.volForest')
const inputRainVolume = document.querySelector('.volRain')
const inputCoffeShopVolume = document.querySelector('.volCoffe-shop')
const inputFireplaceVolume = document.querySelector('.volFireplace')

const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

export {
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
}