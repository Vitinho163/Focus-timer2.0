export default function Controls({
  buttonPlay,
  buttonPause,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace,
}) {

  function playPauseTimer() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
  }

  function SoundForest() {
    cardForest.classList.toggle('active')
  }

  function SoundRain() {
    cardRain.classList.toggle('active')
  }

  function SoundCoffeeShop() {
    cardCoffeeShop.classList.toggle('active')
  }

  function SoundFireplace() {
    cardFireplace.classList.toggle('active')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
}

  return {
    playPauseTimer,
    SoundForest,
    SoundRain,
    SoundCoffeeShop,
    SoundFireplace,
    reset
  }
}