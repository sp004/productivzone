import React from 'react'
import AltNavbar from '../components/Navbar/AltNavbar'
import NoteCards from '../components/Notes/NoteCards'
import NoteForm from '../components/Notes/NoteForm'
import './Draft.css'
// import SearchNoteCard from '../components/Notes/SearchNoteCard'

const Draft = () => {
  return (
    <div>
        <AltNavbar />
        <div className='draft__content'>
          {/* <SearchNoteCard /> */}
          <NoteForm />
          <NoteCards />
        </div>
    </div>
  )
}

export default Draft