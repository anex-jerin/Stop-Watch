const appendminutes = document.getElementById('minutes')
const appendseconds = document.getElementById('seconds')
const appendmilliseconds = document.getElementById('milliseconds')
const buttonStart = document.getElementById('start')
const buttonPause = document.getElementById('pause')
const buttonReset = document.getElementById('reset')

let interval
let minutes = 0
let seconds = 0
let milliseconds = 0

const setTimer = () => {
  milliseconds++
  if (milliseconds < 10) {
    appendmilliseconds.innerText = '0' + milliseconds
  }
  if (milliseconds > 9) {
    appendmilliseconds.innerText = milliseconds
  }
  if (milliseconds > 99) {
    appendseconds.innerText = ++seconds
    milliseconds = 0
  }
  if (seconds < 10) {
    appendseconds.innerText = '0' + seconds
  }

  if (seconds > 59) {
    appendminutes.innerText = ++minutes
    seconds = 0
  }
  if(minutes<10){
    appendminutes.innerText = "0" + minutes
  }
}

buttonStart.onclick = () => {
  interval = setInterval(setTimer, 10)
}

buttonPause.onclick = ()=>{
    clearInterval(interval)
}

buttonReset.onclick =()=>{
    clearInterval(interval)
    milliseconds = 0
    seconds = 0
    minutes = 0
    appendminutes.innerText = '00'
    appendseconds.innerText = '00'
    appendmilliseconds.innerText = '00'
}
