let takiCount = 0;

const button = document.getElementById('takiBag');
const counter = document.getElementById('takiCounter')
const reset = document.getElementById('resetTaki')

button.addEventListener('click', function() {
    takiCount++
    counter.textContent = `Takis: ${takiCount}`;
})

reset.addEventListener('click', function() {
    takiCount = 0
    counter.textContent = `Takis: ${takiCount}`;
})