const button=document.querySelector('.disc1-button')
const img=document.querySelector('.rotate-img')
const container=document.querySelector('.disc1-container')
const audio1=document.querySelector('audio')
button.addEventListener("click",function(){
    container.classList.add('bg-active')
    img.classList.add('anime')
    audio1.play()
})