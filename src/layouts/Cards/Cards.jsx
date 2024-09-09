import { Card } from "../../components/Card/Card";
import { Container } from "../Container/Container";
import s from "./Cards.module.scss";

export const Cards = ({data}) => {
  return (
    <section className={s.cards}>
      <Container>
        <div className={s.cards__wrapper}>
          {data.map((el, index) => (
            <Card key={index} title={el.title} symbol={el.symbol} keywords={el.keywords} />
          ))}
        </div>
      </Container>
    </section>
  );
};
