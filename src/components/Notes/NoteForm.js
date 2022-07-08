import React, { useContext, useEffect, useState } from "react";
import "./NoteForm.css";

import ReactModal from "react-modal";
import { noteContext } from "../../contexts/note-context";
ReactModal.setAppElement("#root");

const NoteForm = () => {
  const {
    addNoteCardHandler,
    editNoteCardHandler,
    editNoteCard,
    isModalOpen,
    setIsModalOpen,
  } = useContext(noteContext);
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");

  const saveHandler = (e) => {
    e.preventDefault();
    if (editNoteCard) {
      editNoteCardHandler(editNoteCard.id, category, notes);
    } else {
      addNoteCardHandler({
        id: Math.random().toFixed(3),
        category,
        notes,
      });
    }
    setCategory("");
    setNotes("");
    setIsModalOpen(false);
  };

  const onCloseHandler = () => {
    setIsModalOpen(false)
    setCategory("");
      setNotes("");
  }

  useEffect(() => {
    if(editNoteCard) {
      setCategory(editNoteCard.category);
      setNotes(editNoteCard.notes);
    } else {
      setCategory("");
      setNotes("");
    }
  }, [editNoteCard]);

  console.log(editNoteCard)
  console.log(category, notes)

  return (
    <div>
      <ReactModal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <div className="form__modal">
          <form onSubmit={saveHandler}>
            <div className="form__input">
              {/* <label htmlFor="category">Enter Category</label> */}
              <input
                type="text"
                id="category"
                value={category}
                placeholder='Enter Category'
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="form__detailnotes">
              <textarea
                cols="30"
                rows="10"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
            <div className="noteform__btn">
              <button type="submit">
                {editNoteCard ? "Edit" : "Save"}
              </button>
              <button
                onClick={onCloseHandler}
              >
                Close
              </button>
            </div>

          </form>
        </div>
      </ReactModal>
    </div>
  );
};

export default NoteForm;
