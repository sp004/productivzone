import React, { useContext } from 'react'
import { noteContext } from '../../contexts/note-context'
import NoteCard from './NoteCard'

const NoteCards = () => {
  const {cardItems} = useContext(noteContext)

  return (
    <>
      {cardItems.length !== 0 && cardItems.map((item) => (
        <NoteCard key={item.id} id={item.id} notes={item.notes} category={item.category} />
      ))}
    </>
  )
}

export default NoteCards