const wrapper = document.getElementById('wrapper')
const info = document.getElementById('info')


wrapper.onclick = function({target}) {
    updateState(target)
}
window.onkeydown = function({key}) {
    if (key === '1' || key === 'a') {
        info.innerText = `Была нажата клавиша ${key}, цвет кнопки "1" изменен`
        updateState(document.getElementById('red'))
    } else if (key === '2' || key === 'b') {
        info.innerText = `Была нажата клавиша ${key}, цвет кнопки "2" изменен`
        updateState(document.getElementById('blue'))
    } else if (key === '3' || key === 'c') {
        info.innerText = `Была нажата клавиша ${key}, цвет кнопки "3" изменен`
        updateState(document.getElementById('yellow'))
    } else if (key === '4' || key === 'd') {
        info.innerText = `Была нажата клавиша ${key}, цвет кнопки "4" изменен`
        updateState(document.getElementById('green'))
    } else if (key === 'r') {
        info.innerText = `Была нажата клавиша ${key}, цвета сброшены`
        resetState()
    } else {
        info.innerText = `Клавиша "x" не является командой`
    }
}


function updateState(target) {
    const color = target.id
    if (target.style.backgroundColor === '') {
        target.style.backgroundColor = color
    } else {
        target.style.backgroundColor = ''
    }
}
function resetState() {
    // for (const btn of document.querySelectorAll('#wrapper button')) {
    // for (const btn of document.querySelector('#wrapper').children) {
    for (const btn of wrapper.children) {
        btn.style.backgroundColor = ''
    }
}