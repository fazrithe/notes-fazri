import style from "../styles/button.module.css";

const NoteButton = ({ label, eventHandler }) => {
  return (
    <button className={style.button} type='button' onClick={eventHandler} data-action={label}>
      {label}
    </button>
  );
};

export default NoteButton;
