import "./styles/global.css";
import "../index.css";
import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";
import { data } from "../data";
import { useState, useEffect } from "react";

function App() {
  // const [findCards, setFindCards] = useState([]);
  const [searchEmoji, setSearchEmoji] = useState([])

  function cardFinder(event) {
    const findResult = event.target.value.toLocaleLowerCase().trim();

    setSearchEmoji(
      data.filter(
        (el) =>
          el.title.toLocaleLowerCase().includes(findResult) ||
          el.keywords.toLocaleLowerCase().includes(findResult)
      )
    );
  }
// console.log(findCards);
console.log(searchEmoji);



  
  useEffect(()=>{
    setSearchEmoji(data)
  }, [])




  return (
    <>
      <Header cardFinder={cardFinder} />
      <Main data={searchEmoji} />
    </>
  );
}

export default App;
