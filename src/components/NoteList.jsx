import style from "../styles/notes.module.css";
import NoteCard from "./NoteCard";

const NoteList = ({ label, notes, setNotes }) => {
  return (
    <section>
      <h3 className={style.heading}>{label}</h3>
      {notes.length === 0 ? (
        <p className={style.empty_note}>Tidak ada catatan.</p>
      ) : (
        <div className={style.list_of_notes}>
          {notes?.map((note) => (
            <NoteCard key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NoteList;
