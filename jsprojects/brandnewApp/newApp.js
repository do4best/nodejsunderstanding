const btnEle = document.getElementById("btn")
function createElement(id,content){
    const element = document.createElement("textarea")
    element.classList.add("note");
    element.placeholder="Empty Note";
    element.value = content;
    element.addEventListener("dbclick",()=>{
        const warning = confirm("Do you want to delete it ?")
        if(warning){
            deleteNote(id,element)
        }
    })
}
function deleteNote(id,element){
    
}
function addNote(){
    const noteObj={
        id:Math.floor(Math.random()*10000),
        content:""
    };
const neteElement = createElement(noteObj.id,noteObj.content)
}
btnEle.addEventListener("click",addNote)