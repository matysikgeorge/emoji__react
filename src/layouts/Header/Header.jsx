import s from "./Header.module.scss";
import { Input } from "../../ui/Input/Input";

export const Header = ({cardFinder}) => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <h1 className={s.header__title}>Emoji Finder</h1>
          <p className={s.header__text}>Find emoji by keywords</p>
          <Input cardFinder={cardFinder} />
        </div>
      </header>
    </>
  );
};
