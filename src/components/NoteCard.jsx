import style from "../styles/card.module.css";
import { showFormattedDate } from "../utils";
import NoteButton from "./NoteButton";

const NoteCard = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    );
  };

  return (
    <article id={id} className={style.card}>
      <header className={style.card_header}>
        <h3 className={style.heading}>{title}</h3>
        <small className={style.date}>{showFormattedDate(createdAt)}</small>
        <p className={style.note}>{body}</p>
      </header>
      <footer className={style.card_footer}>
        <NoteButton eventHandler={() => deleteNote(id)} label='delete' />
        <NoteButton eventHandler={() => toggleArchive(id)} label={archived ? "unarchived" : "archive"}
        />
      </footer>
    </article>
  );
};

export default NoteCard;
