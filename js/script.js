const tabItem = document.querySelectorAll('.tabsItem')
const tabContent = document.querySelectorAll('.tabsContentItem ')


for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].addEventListener('click',function (e) {
        e.preventDefault()
        for (let x = 0; x < tabItem.length; x++) {
            tabItem[x].classList.remove('active')
            tabContent[x].classList.remove('active')
        }
        tabItem[i].classList.add('active')
        tabContent[i].classList.add('active')
    })
}


// clock

const s = document.querySelector('.s')
const m = document.querySelector('.m')
const h = document.querySelector('.h')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')



function clock() {
    let time = new Date()
    let hour = time.getHours() * 30
    let min = time.getMinutes() * 6
    let sec = time.getSeconds() * 6
    
    s.style = `transform:rotate(${sec}deg);`
    m.style = `transform:rotate(${min}deg);`
    h.style = `transform:rotate(${hour}deg);`

    hours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    
    setTimeout(() => {
        clock()
    }, 1000);
}
clock()


// stopwatch

const stopwatchHour = document.querySelector('.stopwatch__hours');
const stopwatchMin = document.querySelector('.stopwatch__minutes');
const stopwatchSec = document.querySelector('.stopwatch__seconds');
const stopwatchBtn = document.querySelector('.stopwatch__btn');
const stopwatchSpan = document.querySelector('.tabsLink__span');
const stopwatchAudio = document.querySelector('.#stopwatch__audio');


stopwatchBtn.addEventListener('click',function () {
    if (this.innerHTML === 'start') {
        stopwatchBtn.innerHTML = 'stop'
        stopwatchSpan.classList.add('active')
        interval = setInterval(() => {
            stopwatch()
        }, 1000);
    }else if (this.innerHTML === 'stop') {
        stopwatchBtn.innerHTML = 'clear'
        stopwatchSpan.classList.remove('active')
        stopwatchSpan.classList.add('active_clear')
        clearInterval(interval)

    }else if (this.innerHTML === 'clear') {
        stopwatchBtn.innerHTML = 'start'
        stopwatchSpan.classList.remove('active_clear')
        stopwatchSec.innerHTML = 0
        stopwatchMin.innerHTML = 0
        stopwatchHour.innerHTML = 0
        count = 0
    }
})

let count = 0
function stopwatch() {
    stopwatchSec.innerHTML = count
    count++
    if (count < 60) {
        stopwatchSec.innerHTML = count
    }
    if (count > 59) {
        stopwatchMin.innerHTML++
        count = 0
        stopwatchSec.innerHTML = count
    }
    if (stopwatchMin.innerHTML > 59) {
        stopwatchHour.innerHTML++
        stopwatchMin.innerHTML = 0
    }
}

// calculator

const calcScreen = document.querySelector('.calc__screen-out');
const calcBtns = Array.from(document.querySelectorAll('.calc__btn'))

calcBtns.map((btn)=>{
    btn.addEventListener('click',function (e) {
        let answer = e.target.innerHTML
        if (answer === 'ac') clear()
        else if (answer === 'ce') del()
        else if (answer === '+/-') plusMinus()
        else if (answer === '√') sqrt()
        else if (answer === '=') equal()
        else add(answer)
        limit()
    })
})


function clear() {
    calcScreen.innerHTML = ''
}

function del() {
    calcScreen.innerHTML = calcScreen.innerHTML.slice(0,-1)
}
function add(answer) {
    calcScreen.innerHTML.length >= 30
    ? calcScreen.innerHTML = calcScreen.innerHTML
    :calcScreen.innerHTML += answer
}
function plusMinus() {
    calcScreen.innerHTML = parseFloat(calcScreen.innerHTML) * -1
}
function sqrt() {
    calcScreen.innerHTML = Math.sqrt(calcScreen.innerHTML)
}
function equal() {
    calcScreen.innerHTML = eval(calcScreen.innerHTML)
}
function limit() {
if (calcScreen.innerHTML.length >= 20) {
calcScreen.style.fontSize = '20px'
}else if (calcScreen.innerHTML.length >=12) {
    calcScreen.style.fontSize = '30px'
}else if (calcScreen.innerHTML.length <=12){
calcScreen.style.fontSize = '40px'
}
}

// timer

const timerHour = document.querySelector('.timer__hours');
const timerMin = document.querySelector('.timer__minutes');
const timerSec = document.querySelector('.timer__seconds');
const timerSet = document.querySelector('.timer__set');
const timerAudio = document.querySelector('.#timer__audio');
const timerBtns = Array.from(document.querySelectorAll('.timer__btn, .timer__set, .timer__clear'))

timerBtns.map((btn)=>{
    btn.addEventListener('click',function (e){
        let answer = e.target.innerHTML
        timerClick(answer)
    })
})

function timerClick(btn){
    if (btn.toLowerCase() === 'play'){
        timerSet.innerHTML = 'PAUSE'
      interval = setInterval(() => {
        timer()
        }, 1000);

    }else if (btn.toLowerCase() === 'pause'){
        timerSet.innerHTML = 'PLAY'
        clearInterval(interval)

    }else if (btn.toLowerCase() === 'clear'){
        timerSet.innerHTML = 'PLAY'
        timerSec.innerHTML = ''
        timerMin.innerHTML = ''
        timerHour.innerHTML = ''
        sanoq = 0
        clearInterval(interval)
        timerAudio.pause()
        timerAudio.currentTime = 0

    }else{
    timerScreen(btn)
    }
}


function timerScreen(num) {
    if (timerSec.innerHTML.length < 2) {
       let second = timerSec.innerHTML += num
       checkSecond(second)
    }else if (timerMin.innerHTML.length < 2) {
        timerMin.innerHTML += num
    }else if (timerHour.innerHTML.length < 2) {
        timerHour.innerHTML += num
    }
}
let sanoq = 0 
function checkSecond(second) {
    sanoq = second
}


function timer() {
    if (sanoq > 0) {
        sanoq--
        timerSec.innerHTML = sanoq
    }else{
        if (timerMin.innerHTML > 0) {
            timerMin.innerHTML--
            sanoq = 59
            timerSec.innerHTML = sanoq
        }else{
            if(timerHour.innerHTML > 0) {
                timerHour.innerHTML--
                timerMin.innerHTML = 59
                sanoq = 59
                timerSec.innerHTML = sanoq
            }else{
                timerSec.innerHTML = ''
                timerMin.innerHTML = ''
                timerHour.innerHTML = ''
                clearInterval(interval)
                timerSet.innerHTML - "PLAY"
                timerAudio.play()
            }
        }
    }
}



