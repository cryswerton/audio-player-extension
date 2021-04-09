console.log('funcionando...')

let url = 'fade.mp3'
let audio = new Audio(url)

let btn = document.querySelector('#btn')

btn.onclick = function(){
    audio.play()
}