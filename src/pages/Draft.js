import React, { useContext } from 'react'
import AltNavbar from '../components/Navbar/AltNavbar'
import NoteCards from '../components/Notes/NoteCards'
import NoteForm from '../components/Notes/NoteForm'
import './Draft.css'
// import SearchNoteCard from '../components/Notes/SearchNoteCard'


import {FiPlusCircle} from 'react-icons/fi'
import { noteContext } from '../contexts/note-context'

const Draft = () => {
  const {setIsModalOpen} = useContext(noteContext)

  return (
    <div>
        <AltNavbar />
        <div className='draft__content'>
          {/* <SearchNoteCard /> */}
          <FiPlusCircle className='draft__plusicon' onClick={() => (setIsModalOpen(true))} />
          <NoteForm />
          <NoteCards />
        </div>
    </div>
  )
}

export default Draft