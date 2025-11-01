let navebarEle = document.querySelector(".navebar")

const bottomContaner=document.querySelector(".bottom-container")
window.addEventListener("scroll",()=>{
if(window.scrollY > bottomContaner.offsetTop - navebarEle.offsetHeight - 50){
    navebarEle.classList.add("active")
}else{
    navebarEle.classList.remove("active")
}
})