import { createContext, useState } from "react";

export const noteContext = createContext()

const NoteContextProvider = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editNoteCard, setEditNoteCard] = useState(null)
    // const [searchedCardItems, setSearchedCardItems] = useState([])
    const [cardItems, setCardItems] = useState([])

    const addNoteCardHandler = (newNote) => {
        setCardItems([...cardItems, newNote])
    }

    const deleteNoteCardHandler = (id) => {
        setCardItems(cardItems.filter((item) => item.id !== id))
    }

    const findCategory = (id) => {
        const editedCard = cardItems.find(item => item.id === id )
        setEditNoteCard(editedCard)
        setIsModalOpen(true)
    }

    const editNoteCardHandler = (id, category, notes) => {
        const editedCardItems = cardItems.map((item) => item.id === id ? {id, category, notes} : item)
        setCardItems(editedCardItems)
        setEditNoteCard(null)
    }

    // const searchNoteCard = (searchedCategory) => {
    //     if(searchedCategory.trim().length !== 0){
    //         const searchedItem = cardItems.filter(item => item.category.toLowerCase().includes(searchedCategory.toLowerCase()))
    //         setSearchedCardItems(searchedItem)
    //     }
    // }

    return(
        <noteContext.Provider value={{cardItems, editNoteCard, setEditNoteCard, findCategory, addNoteCardHandler, editNoteCardHandler, deleteNoteCardHandler, setIsModalOpen, isModalOpen}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteContextProvider