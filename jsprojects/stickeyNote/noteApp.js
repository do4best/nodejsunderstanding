
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
4- addNote(id,content) this function is responsible for adding the data by user

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
    })// if the confirmation alert is no it will remain the same
    element.addEventListener("input",()=>{ // in case you update it it will be updated by calling update function
        updateNote(id,element.value)// id will be same and the element will be updated
    })
    return element; // return element

}// end of note element
const updateNote=(id,content)=>{ // updateNote function method remember this function will not be hoisted
    const notes = getNotes(); // store the storageFunction in notes variable
    const target = notes.filter((note)=>note.id === id)[0];// the storage function will be filtered by comparing the  main id parameter to sub parameter
    target.content = content;// the parameter content is replaced to the previously called function
    saveNotes(notes)// saveNotes method is called on previously store notes variable
    // again note no return is found because it updating the dom element.

}
const deleteNote=(id,element)=>{// delete function with two parameters 
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