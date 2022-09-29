import { useState } from "react";
import NoteInput from "./NoteInput";
import style from "../styles/form-input.module.css";

const NoteFormInput = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      { id: timestamp, title, body: note, archived: false, createdAt: timestamp },
    ]);
  };

  return (
    <form className={style.form} onSubmit={createNote}>
      <h2 className={style.heading}>Buat Catatan</h2>
      <small className={style.small}>
        Sisa karakter: <span className={style.counter}>{50 - title.length}</span>
      </small>
      <NoteInput
        value={title}
        onChange={setTitle}
        type='text'
        placeholder='Ini adalah judul...'
        id='title'
        name='title'
        required
      />
      <NoteInput
        value={note}
        onChange={setNote}
        type='textarea'
        placeholder='Tuliskan catatanmu di sini...'
        id='note'
        name='note'
        required
      />
      <NoteInput type='submit' id='submit_form' name='submit_form' value='Buat' />
    </form>
  );
};

export default NoteFormInput;
