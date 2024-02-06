let reqem = 0;
let t;
let saniye;
let deqiqe;
let saat;
let a = false; 

function timer() {
    reqem++;
    saat = `0${Math.floor(reqem / 3600)}`.slice(-2)
    deqiqe = `0${Math.floor((reqem - saat * 3600) / 60)}`.slice(-2)
    saniye = `0${reqem % 60}`.slice(-2)
    document.querySelector('#timer').innerHTML = `${saat}:${deqiqe}:${saniye}`;
}

function start() {
    if (!t) {
        t = setInterval(timer, 1000);
        a = true; 
    }
}

function stop() {
    clearInterval(t);
    t = undefined;
    a=false
}

function reset() {
    document.querySelector('#timer').innerHTML = `00:00:00`
    document.querySelector('#dovr').innerHTML = ''
    reqem = 0;
}

function lap() {
    if(a==0){
        return
    }
    if (a) { 
        const dovr = document.querySelector('#dovr')
        const newDiv = document.createElement('div')
        newDiv.classList.add('lap-div')
        dovr.append(newDiv)
        newDiv.innerHTML = `${saat}:${deqiqe}:${saniye}`
    } else {
        alert('Press the start button');
    }
}



document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);
document.querySelector('#reset').addEventListener('click', reset);
document.querySelector('#lap').addEventListener('click', lap);
