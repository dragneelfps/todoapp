import React from 'react'
import Note from './Note'
import './Dashboard.css'

function Dashboard({ notes, deleteNote, pinNote }) {
    const pinnedNotes = notes.filter((note) => note.pinned)
    const otherNotes = notes.filter((note) => !note.pinned)

    const renderNotes = (notes) => notes.map((note) => {
        return <Note note={note} deleteNote={deleteNote} pinNote={pinNote} />
    })
    if (notes.length > 0) {
        return (
            <div class="dashboard">
                {pinnedNotes.length > 0 && (
                    <div>
                        <h2>Pinned</h2>
                            {renderNotes(pinnedNotes)}
                    </div>
                )}
                {otherNotes.length > 0 && (
                    <div>
                        <h2>All Notes</h2>
                            {renderNotes(otherNotes)}
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <div class="empty">No Notes Found</div>
        )
    }
}

export default Dashboard