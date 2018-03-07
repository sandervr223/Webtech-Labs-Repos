class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    let p = document.createElement('p');
    let rem = document.createElement('a');
      
    p.innerHTML = this.title;
    rem.innerHTML = 'Remove';
    rem.setAttribute('class', 'card-remove');
    rem.setAttribute('href', '#');
    rem.addEventListener('click', this.remove.bind(newNote));
    
    newNote.appendChild(p);
    newNote.appendChild(rem);
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    let note = document.querySelector('.notes');
    note.appendChild(this.element);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector('#btnAddNote');
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.txtAdd = document.querySelector('#txtAddNote');
    this.txtAdd.addEventListener('keydown', this.createNote.bind(this));
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    e.preventDefault();
    if((e.type == "click" || (e.type == "keydown" && e.keyCode == 13)) && this.txtAdd.value != ''){
        // HINT🤩
        note.add();
        note.saveToStorage();
        this.reset();
    }
  }
  
  reset(){
    // this function should reset the form 
    this.txtAdd.value = '';
  }
  
}

let app = new App();