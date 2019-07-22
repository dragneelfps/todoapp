import React, { useState } from 'react'
import './App.css'
import Form from './Form'
import Dashboard from './Dashboard'

let noteId = 0

function App() {
  const [notes, setNotes] = useState([])

  const addNote = (noteTitle) => {
    noteId++
    const note = {id: noteId, title: noteTitle, pinned: noteId%2 === 0}
    setNotes([...notes, note])
  }

  const deleteNote = (noteId) => {
    const newNotes = []
    notes.forEach((note) => {
      if(note.id !== noteId) {
        newNotes.push(note)
      } 
    })
    setNotes(newNotes)
  }

  const pinNote = (noteId) => {
    const newNotes = notes.map((note) => {
      if(note.id === noteId) {
        note.pinned = !note.pinned
      }
      return note
    })
    setNotes(newNotes)
  }

  return (
    <div class="main-content">
      <Form addNote={addNote}/>
      <Dashboard notes={notes} deleteNote={deleteNote} pinNote={pinNote}/>
    </div>
  );
}

export default App;
