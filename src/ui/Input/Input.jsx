import s from "./Input.module.scss";

export const Input = ({cardFinder}) => {
  return (
    <>
      <input onChange={cardFinder}
        className={s.input}
        type="text"
        placeholder="Placeholder"
      />
    </>
  );
};
