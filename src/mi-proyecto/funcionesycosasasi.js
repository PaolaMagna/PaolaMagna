function cambiarColor() {
    const color = Math.floor(Math.random() * 16777)
    document.getElementById('color').innerText =
        elem.style.backgroundColor = '#' + color
    document.body.style.backgroundColor = '#' + 
}

const btn = document.getElementById('')
btn.addEventListener("click", cambiarColor)