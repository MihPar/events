let parent = document.querySelector('div')
parent.onclick = function({target}) {
    function updateState(color, timeout) {
        target.style.backgroundColor = color
        setTimeout(function() {
            target.style.backgroundColor = ''
        }, timeout)
    }
    updateState(target.id, 1000)
}
