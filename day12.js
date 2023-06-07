var range = document.querySelector('.range')
var process = document.querySelector('.process')
var value = document.querySelector('.process span')
var body = document.querySelector('body')
var h1 = document.querySelector('h1')


function updateProcess(percent) {
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
    body.style.background = `linear-gradient(to right, rgba(0,0,0,${1-percent/100}),rgba(0,0,0,${1-percent/100})), url(7.jpg) no-repeat center/cover`
    h1.style.color = `rgba(0, 0, 0, ${percent/100})`
    if(percent>=50){
        h1.style.color = `rgba(240, 230, 140, ${(percent-50)/50})`
    }else{
        h1.style.color = `rgba(255, 255, 255, ${1-percent/50})`
    }
}

range.addEventListener('mousemove', function(e) {
    var processWidth = e.pageX - this.offsetLeft
    var percent = processWidth / this.offsetWidth * 100
    percent = Math.round(percent)
    updateProcess(percent)
})

updateProcess(50)