const { createElement } = require("react")

const buttonElement = document.getElementById("btn")
const appElement = document.getElementById("app")
getNotes().forEach((note)=>{
    const noteElement = noteElement(note.id,note.content);
    noteElement.insertBefore(noteElement,buttonElement)
})
const noteElement=(id,content)=>{
    const element = document.createElement("textarea");
    element.classList.add('note')
    element.placeholder="Empty Note";
    element.value = content;

    element.addEventListener("dblclick",()=>{
        const warning = confirm("Do you want to delete this note ? ")
        if(warning){
            deleteNote(id,element)
        }
    })
    element.addEventListener("input",()=>{
        updateNote(id,element.id)
    })
    return element;

}
const updateNote=(id,content)=>{
    const notes = getNotes();
    const target = notes.filter((note)=>note.id === id)[0];
    target.content = content;
    saveNotes(notes)

}
const deleteNote=()=>{

}
function addNote(){

const notes=getNotes( );
    const noteObj={
        id:Math.floor(Math.random()*100000),
        content:""
    }
    const createNoteElement =noteElement(noteObj.id,noteObj.content) 
    appElement.insertBefore(createNoteElement,buttonElement)
    notes.push(noteObj)
    saveNotes(notes)
}
buttonElement.addEventListener("click",addNote)
const saveNotes=(notes)=>{
    localStorage.setItem("app-notes",JSON.stringify(notes))

}
const getNotes=()=>{
   return JSON.parse( localStorage.getItem("app-notes")|| [])
}