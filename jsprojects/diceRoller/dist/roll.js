const buttonEle = document.getElementById("roll-dice")
const diceElement=document.getElementById('dice')
const rollHistoryEle = document.getElementById('roll-history')
let historyList = []
function loadHistory(){
  const saved = localStorage.getItem('diceRollHistory')
  if(saved){
    historyList = JSON.parse(saved)
    updateRollHistory()
  }
}

// Save history to localStorage
function saveHistory(){
  localStorage.setItem('diceRollHistory', JSON.stringify(historyList))
}

function rollDice(){
    const rollResult = Math.floor(Math.random()*6)+1;
    const diceFace = getDiceFace(rollResult)
    diceElement.innerHTML = diceFace
historyList.push(rollResult)
updateRollHistory()
saveHistory()
}
function updateRollHistory(){
    rollHistoryEle.innerHTML = "";
    for(let i=0; i<historyList.length; i++){
        const listItem = document.createElement("li")
        listItem.innerHTML = `Roll ${i+1}: <span>${getDiceFace(historyList[i])}</span>`;
        rollHistoryEle.appendChild(listItem)
    }
}

function getDiceFace(result){
    switch(result){
        case 1:  
        return "&#9856";
        case 2:
            return "&#9857";
            case 3:
                return "&#9858";
                case 4:
                    return "&#9859";
                    case 5:
                        return "&#9860";
                        case 6:
                            return "&#9861";
                            default:
                                return ""






    }

}
loadHistory()
buttonEle.addEventListener("click",()=>{
diceElement.classList.add("roll-animation")    
setTimeout(()=>{
diceElement.classList.remove("roll-animation")
rollDice()
},1000)

})