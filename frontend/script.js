let takiCount = 0;

const button = document.getElementById('takiBag');
const counter = document.getElementById('takiCounter');
const reset = document.getElementById('resetTaki');

const slider = document.getElementById('fazRange');
const freddy = document.getElementById('fazbear');
const killBtn = document.getElementById('killFaz');
const resetBtn = document.getElementById('resetFaz');

const takiClickSound = new Audio('audio/Finger Snap.wav');
const rizzSound = new Audio('audio/rizz-sounds.mp3');

button.addEventListener('click', function() {
    takiCount++;
    counter.textContent = `Takis: ${takiCount}`;
    takiClickSound.currentTime = 0;
    takiClickSound.play();
});

reset.addEventListener('click', function() {
    takiCount = 0;
    counter.textContent = `Takis: ${takiCount}`;
});

slider.addEventListener('input', function() {
    freddy.style.width = this.value + 'px';
    freddy.style.height = 'auto';
});

killBtn.addEventListener('click', function() {
    freddy.src = "img/Mangled Freddy.png";
    freddy.alt = "Dead Freddy";
    rizzSound.currentTime = 0;
    rizzSound.play();
});

resetBtn.addEventListener('click', function() {
    slider.value = 100;
    freddy.style.width = slider.value + 'px';
    freddy.style.height = 'auto';
    freddy.src = "img/freddy fazbear.png";
    freddy.alt = "Freddy Fazbear";
});