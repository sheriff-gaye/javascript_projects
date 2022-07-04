//writing the functionality of the code

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currenntActive = 1

next.addEventListener('click', () => {
    currenntActive++

    if (currenntActive > circles.length) {
        currenntActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currenntActive--

    if (currenntActive < 1) {
        currenntActive = 1
    }

    update()
})

function update() {

    circles.forEach((circle, idx) => {
        if (idx < currenntActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currenntActive == 1) {
        prev.disabled = true

    }
    else if (currenntActive == circles.length) {
        next.disabled = true
    }
    else {

        prev.disabled = false
        next.disabled = false
    }

}