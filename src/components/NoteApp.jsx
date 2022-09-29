import { useState, useEffect} from "react";
import NoteHeader from "./NoteHeader";
import NoteFormInput from "./NoteFormInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils"
import style from "../styles/app.module.css";

function NoteApp() {
    const [query, setQuery] = useState("");
    const [searchNotes, setSearchNotes] = useState([]);
    const [notes, setNotes] = useState(getInitialData());
  
    const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
    const archivedNotes = (searchNotes || notes).filter((note) => note.archived);
  
    useEffect(() => {
      setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
    }, [query, notes]);
  

        return (
            <>
            <NoteHeader search={query} updateQuery={setQuery} updateNotes={setNotes} />
            <main className={style.main}>
                <NoteFormInput updateNotes={setNotes} />
                <NoteList label='Catatan Aktif' notes={activeNotes} setNotes={setNotes} />
                <NoteList label='Catatan Arsip' notes={archivedNotes} setNotes={setNotes} />
            </main>
            </>
        );
}

export default NoteApp;