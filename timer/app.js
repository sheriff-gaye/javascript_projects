
const time_el = document.querySelector('.time')
const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset')

let seconds = 0
let interval = null

start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)

function timer() {
    seconds++

    let sec = seconds % 60
    let min = Math.floor(seconds / 60)
    let hrs = Math.floor(seconds / 3600)

    if (hrs < 10) hrs = '0' + hrs
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec
    time_el.innerHTML = `${hrs}:${min}:${sec}`;
}

timer()

function start() {
    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval)
    interval = null
}

function reset() {
    stop()
    seconds = 0
    time_el.innerHTML = "00:00:00"
}