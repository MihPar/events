let parent = document.querySelector('div')
parent.onclick = function(event) {
    const target = event.target
    function upDateState(color, timeout) {
        if (target.style.backgroundColor === '') {
            target.style.backgroundColor = color
        } else {
            target.style.backgroundColor = ''
        }
    }
    if (target.id === 'red') {
        upDateState('red', 1000)
    } else if (target.id === 'blue') {
        upDateState('blue', 2000)
    } else if (target.id === 'yellow') {
        upDateState('yellow', 1000)
    } else if (target.id === 'green') {
        upDateState('green', 3000)
    }
}
