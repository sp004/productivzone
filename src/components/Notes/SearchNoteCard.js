import React, { useContext, useState } from 'react'
import { noteContext } from '../../contexts/note-context'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchNoteCard = () => {
    const {searchNoteCard} = useContext(noteContext)
    const [input, setInput] = useState('')

    const searchHandler = (input) => {
      console.log(input)
      searchNoteCard(input)
        setInput('')
    }

  return (
    <div className='search'>
        <form>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search Your Notes by Category....' />
            <AiOutlineSearch onClick={() => searchHandler(input)} />
        </form>
    </div>
  )
}

export default SearchNoteCard