import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
     const [notes, setNotes] = useState([]);

     const [activeNote, setActiveNote] = useState(false);

     const onAddNote = () => {
          const newNote = {
               id: uuid(),
               title: "Заметка без заголовка",
               body: "",
               lastModified: Date.now(),
          };
          setNotes([newNote, ...notes]);
     };

     const onUpdateNote = (updateNote) => {
          const updatedNotesArray = notes.map((note) => {
               if (note.id === activeNote) {
                    return updateNote;
               }

               return note;
          });
          setNotes(updatedNotesArray);
     };

     const onDeleteNote = (idtoDelete) => {
          setNotes(notes.filter((note) => note.id !== idtoDelete));
     };

     const getActiveNote = () => {
          return notes.find((note) => note.id === activeNote);
     };

     return (
          <div className='App'>
               <Sidebar
                    notes={notes}
                    onAddNote={onAddNote}
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote}
               />
               <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
          </div>
     );
}

export default App;
