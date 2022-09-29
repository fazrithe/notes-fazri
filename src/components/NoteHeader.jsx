import React from "react";
import NoteInput from "./NoteInput";
import style from "../styles/header.module.css";

const NoteHeader = ({ search, updateQuery }) => {
    return (
        <header className={style.container}>
            <h1>Notes Apps</h1>
                <NoteInput
                    value={search}
                    onChange={updateQuery}
                    type='text'
                    id='search_note'
                    name='search_note'
                    placeholder='Cari Catatan...'
                />
        </header>
    );
};

export default NoteHeader;