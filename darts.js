var points = 0;
var green = document.createElement('div')
green.style.width = '320px'
green.style.height = '320px'
green.style.background = 'green'
green.style.position = 'absolute'
green.style.top = 'calc(50% - 160px)'
green.style.left = 'calc(50% - 160px)'
green.style.borderRadius = '50%'


var yellow = document.createElement('div')
yellow.style.width = '160px'
yellow.style.height = '160px'
yellow.style.background = 'yellow'
yellow.style.position = 'absolute'
yellow.style.top = 'calc(50% - 80px)'
yellow.style.left = 'calc(50% - 80px)'
yellow.style.borderRadius = '50%'

var blue = document.createElement('div')
blue.style.width = '80px'
blue.style.height = '80px'
blue.style.background = 'blue'
blue.style.position = 'absolute'
blue.style.top = 'calc(50% - 40px)'
blue.style.left = 'calc(50% - 40px)'
blue.style.borderRadius = '50%'


var red = document.createElement('div')
red.style.width = '40px'
red.style.height = '40px'
red.style.background = 'red'
red.style.position = 'absolute'
red.style.top = 'calc(50% - 20px)'
red.style.left = 'calc(50% - 20px)'
red.style.borderRadius = '50%'

var drogif = document.createElement('img')
drogif.src = 'drotikgif.gif'
drogif.width = '100'
drogif.style.display = 'none'
drogif.style.position = 'absolute'

var drotik = document.createElement('img')
drotik.src = 'drotik.png'
drotik.width = '50'
drotik.style.position = 'absolute'

document.addEventListener("mousemove", function (event) {
    drotik.style.top = `${event.clientY - 50}px`
    drotik.style.left = `${event.clientX}px`
})
var scoreboard = document.createElement('div')
scoreboard.style.border = 'thick solid #000000'
scoreboard.style.background = '#fff000'
scoreboard.style.position = 'absolute'
scoreboard.innerText = "your score = 0"
var scoreboard = document.createElement('div')
scoreboard.style.border = 'thick solid #000000'
scoreboard.style.background = '#fff000'
scoreboard.style.position = 'absolute'
scoreboard.innerText = "your score = 0"


document.addEventListener("click", function (event) {
    const dist = Math.sqrt(
        Math.pow((document.documentElement.clientWidth / 2) - event.clientX, 2)
        +
        Math.pow((document.documentElement.clientHeight / 2) - event.clientY, 2)
    )
    if (dist < 20) {
        points += 10;
        var hit1 = new Audio('hit1.mp3');
        hit1.play();
    } else if (dist >= 20 && dist < 40) {
        points += 8;
        var hit2 = new Audio('hit2.mp3');
        hit2.play();
    } else if (dist >= 40 && dist < 80) {
        points += 5;
        var hit3 = new Audio('hit3.mp3');
        hit3.play();
    } else if (dist >= 80 && dist < 160) {
        points += 2;
        var hit4 = new Audio('hit4.mp3');
        hit4.play();
    }

    drogif.style.display = 'block'
    drogif.src = 'drotikgif.gif'
    drogif.style.top = `${event.clientY - 50}px`
    drogif.style.left = `${event.clientX - 50}px`
    drotik.style.display = 'none'
    setTimeout(function () {
        drogif.style.display = 'none'
        drotik.style.display = 'block'
        scoreboard.innerText = "your score = " + points
    }, 800)
});




var mutal1 = document.createElement('img')
mutal1.src = 'mutal.gif'
mutal1.width = '30'
mutal1.style.position = 'relative'
mutal1.style.transition = 'transform 0.5s';

setInterval(function () {

    const x = Math.floor((Math.random() * document.documentElement.clientWidth ));
    const y = Math.floor((Math.random() * 100));
    mutal1.style.transform = 'translate(' + (x) + 'px, ' + (y) + 'px) ';
}, 19)

var mutal2 = document.createElement('img');
mutal2.src = 'mutal.gif'
mutal2.style.width = '30px';
mutal2.style.position = 'relative';
mutal2.style.transition = 'transform 1.5s';
setInterval(function () {
    const x = Math.floor((Math.random() * document.documentElement.clientWidth ));
    const y = Math.floor((Math.random() * document.documentElement.clientHeight));
    mutal2.style.transform = 'translate(' + (x) + 'px, ' + (y) + 'px) ';
}, 1900)

var mutal3 = document.createElement('img');
mutal3.src = 'mutal.gif'
mutal3.style.width = '40px';
mutal3.style.position = 'relative';
mutal3.style.transition = 'transform 2.5s';
setInterval(function () {
    const x = Math.floor((Math.random() * 800));
    const y = Math.floor((Math.random() * 600));
    mutal3.style.transform = 'translate(' + (x) + 'px, ' + (y) + 'px) ';
}, 2900)

var mutal4 = document.createElement('img');
mutal4.src = 'Overlord.gif'
mutal4.style.width = '50px';
mutal4.style.position = 'relative';
mutal4.style.transition = 'transform 2.5s';
setInterval(function () {
    const x = Math.floor((Math.random() * 200));
    const y = Math.floor((Math.random() * 320));
    mutal4.style.transform = 'translate(' + (x) + 'px, ' + (y) + 'px) ';
}, 100)

var music = new Audio('zerg1.mp3')
music.volume = 0.3

window.onmouseover =  function() {
if (!(!music.paused && !music.ended && 0<music.currentTime)){
(music.play()).catch(() => {music.play();})
}
}   
setTimeout(function () {
    alert("time is up, try again")
    location = location
}, 30000);


document.body.appendChild(mutal4);
document.body.appendChild(mutal3);
document.body.appendChild(mutal2);
document.body.appendChild(mutal1);
document.body.appendChild(green);
document.body.appendChild(yellow);
document.body.appendChild(blue);
document.body.appendChild(red);
document.body.appendChild(drotik);
document.body.appendChild(drogif);
document.body.appendChild(scoreboard);