import React, { useRef } from 'react'
import './Form.css'

function Form({ addNote }) {

    const noteTitle = useRef()
    const onSubmit = (e) => {
        e.preventDefault()
        const currentValue = noteTitle.current.value
        console.log("onSubmit: ", currentValue)
        if(currentValue !== null && currentValue.length > 0) {
            addNote(currentValue)
            noteTitle.current.value = ""
        }
    }

    return (
        <form class="input-form">
            <input class="input" ref={noteTitle} type="text" />
            <button class="submit" onClick={(e) => onSubmit(e)}>Add Note</button>
        </form>
    )
}

export default Form;