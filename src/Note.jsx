import React, { useState } from 'react';
import './App.css';

export const Note = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addTask = () => {
    if (title && note) {
      setNotes([...notes, { title, note }]);
      setTitle('');
      setNote('');
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNote = (index) => {
    const editedNote = notes[index];
    setTitle(editedNote.title);
    setNote(editedNote.note);
    deleteNote(index);
  };

  return (
    <>
    <div className='main-head'>
      <h1>Note App</h1>
    </div>
      <div className='container'>
        <div className='head'>
          <h2>Add Note</h2>
        </div>
        <div className='note'>
          <div className='note-add'>
            <input
              type="text"
              id="input-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <br />
            <input
              type="text"
              id="input-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Notes"
            />
          </div>
          <div className='add'>
            <button onClick={addTask}>Add</button>
          </div>
          <div className='notes-list'>
            {notes.map((item, index) => (
              <div key={index} className='note-item'>
                <h2>{item.title}</h2>
                <p>{item.note}</p>
                <button onClick={() => editNote(index)}>Edit</button>
                <button onClick={() => deleteNote(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
