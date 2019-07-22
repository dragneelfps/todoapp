import React from 'react'
import './Note.css'

function Note({ note, deleteNote, pinNote }) {
    return (
        <div class="note" key={note.id}>
            <span class="note-title">{note.title}</span>
            <div>
                <button class="note-delete" onClick={() => deleteNote(note.id)}>Delete</button>
                <button class="note-pin" onClick={() => pinNote(note.id)}>{note.pinned ? "Unpin" : "Pin"}</button>
            </div>
        </div>
    )
}

export default Note