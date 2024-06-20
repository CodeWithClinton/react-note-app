import React from 'react'
import NoteCard from './NoteCard'

const NoteCardContainer = () => {
  return (
    <div className="container">
    <div className="note-has-grid row">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />

      <NoteCard />
      
    </div>
    </div>
  )
}

export default NoteCardContainer