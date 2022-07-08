import React, { useContext, useState } from "react";
import './NoteCard.css'
import {AiFillDelete} from 'react-icons/ai'
import { noteContext } from "../../contexts/note-context";

const NoteCard = ({id, category, notes}) => {
    const {deleteNoteCardHandler, findCategory} = useContext(noteContext)

    const deletehandler = (id) => {
        deleteNoteCardHandler(id)
    }

  return (
    <div className="noteCard">
      <div onClick={() => findCategory(id)} className="notecard__edit">
        <h3>{category}</h3>
        <p>{notes}</p>
      </div>

      <div className="noteCard__delete-icon">
        <AiFillDelete onClick={() => deletehandler(id)} />
      </div>
    </div>
  );
};

export default NoteCard;
