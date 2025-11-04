
// programmed by Meer Afzal
// status : Done
// inspection still remaining
// date : 4th November,2025
// list of doms A Button and a Division
/*
list of functions
1- noteElement(id,content) with two parameter also with two eventListeners a- Double Click b-Input
2-  updateNotes(id,content) with two parameters updating the dom only that is why it return nothing. it is used in order tho update the already store  note
3- deleteNote(id,content) also two first it getNotes() and filter it for removing the dom element by calling remove element of element


*/
const buttonElement = document.getElementById("btn")// target the button element.
const appElement = document.getElementById("app") // target the appElement
getNotes().forEach((note)=>{// this loop is necessary for the already store items
    const noteEle = noteElement(note.id,note.content);
    appElement.insertBefore(noteEle,buttonElement)
})
function noteElement(id,content){// creating the note element
    const element = document.createElement("textarea"); // targeting the dom element for creating Textarea
    element.classList.add('note') // adding the css note class
    element.placeholder="Empty Note"; // adding the place holder
    element.value = content; // after creating adding the content
// in case you want to delete the note
    element.addEventListener("dblclick",()=>{ // adding eventlistener on double click
        const warning = confirm("Do you want to delete this note ? ")// showing the confirmation message to user
        if(warning){ // in case user press yes
            deleteNote(id,element) // call the deleteNote function
        }
    })
    element.addEventListener("input",()=>{
        updateNote(id,element.value)
    })
    return element;

}
const updateNote=(id,content)=>{
    const notes = getNotes();
    const target = notes.filter((note)=>note.id === id)[0];
    target.content = content;
    saveNotes(notes)

}
const deleteNote=(id,element)=>{
    const notes =getNotes().filter((note)=>note.id !== id)
    saveNotes(notes)
    appElement.removeChild(element)

}
function addNote(){
    if(!appElement || !buttonElement) return null;

const notes=getNotes();
    const noteObj={
        id:Date.now()+Math.floor(Math.random()*1000),
        content:""
    }
    const createNoteElement =noteElement(noteObj.id,noteObj.content) 
    appElement.insertBefore(createNoteElement,buttonElement)
    notes.push(noteObj)
    saveNotes(notes)
}
buttonElement.addEventListener("click",addNote)
const saveNotes=(notes)=>{
    try{
    localStorage.setItem("app-notes",JSON.stringify(notes))
    return true}
    catch(e){
        console.error("saved failed",e)
        return false;
    }
}
function getNotes(){// this function get the localstorage data
   return JSON.parse( localStorage.getItem("app-notes")|| "[]")
}