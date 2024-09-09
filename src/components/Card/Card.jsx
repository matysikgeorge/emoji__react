import s from "./Card.module.scss";

export const Card = ({ title, symbol, keywords }) => {
  const strArr = keywords.split(" ");
  const newArr = [...new Set(strArr)];
  const unique = newArr.join(" ");

  return (
    <>
      <article className={s.card}>
        <p className={s.card__symbol}>{symbol}</p>
        <h3 className={s.card__title}>{title}</h3>
        <p className={s.card__text}>{unique}</p>
      </article>
    </>
  );
};
