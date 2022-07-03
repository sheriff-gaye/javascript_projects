const quizData = [
    {
        question: 'Which language runs in a web broswer ?',
        a: 'Java',
        b: 'Javascript',
        c: 'Python',
        d: 'CSS',
        correct: 'b'

    },
    {
        question: 'Which of the following is use for styling ?',
        a: 'Java',
        b: 'Python',
        c: 'HTML',
        d: 'CSS',
        correct: 'd'

    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },

]

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const a = document.getElementById('a_text')
const b = document.getElementById('b_text')
const c = document.getElementById('c_text')
const d = document.getElementById('d_text')
const button = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a.innerText = currentQuizData.a
    b.innerText = currentQuizData.b
    c.innerText = currentQuizData.c
    d.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

button.addEventListener('click', () => {
    const answer = getSelected()

    if (answer == quizData[currentQuiz].correct) {
        score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
        loadQuiz()
    }
    else {
        quiz.innerHTML = `
        <h2 style="margin-top:284px;text-align:center;">You answered ${score}/${quizData.length} question correctly</h2>
        <button onclick="location.reload()">TRY AGAIN</button>`

    }

})


