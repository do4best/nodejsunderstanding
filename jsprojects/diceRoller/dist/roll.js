const buttonEle = document.getElementById("roll-dice")
const diceElement=document.getElementById('dice')
buttonEle.addEventListener("click",()=>{
diceElement.classList.add("roll-animation")    
setTimeout(()=>{
diceElement.classList.remove("roll-animation")
},1000)
})