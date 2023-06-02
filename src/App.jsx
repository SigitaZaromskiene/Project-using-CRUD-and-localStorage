import "./App.scss";
import Create from "./Components/Create";
import List from "./Components/List";
import { read, create } from "./Components/localStorage";
import { useEffect, useState } from "react";

const numbers = [
  { number: "One", num: "1" },
  { number: "Two", num: "2" },
  { number: "Three", num: "3" },
  { number: "Four", num: "4" },
  { number: "Five", num: "5" },
  { number: "Six", num: "6" },
];

const KEY = "labassss";

function App() {
  const [newSq, setNewSq] = useState(null);
  const [list, setList] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    setList(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if (newSq === null) {
      return;
    }
    create(KEY, newSq);
    setLastUpdate(Date.now());
  }, [newSq]);

  return (
    <div className="container">
      <div className="content">
        <div className="left">
          <Create numbers={numbers} setNewSq={setNewSq} />
        </div>
        <div className="right">
          <List list={list}></List>
        </div>
      </div>
    </div>
  );
}

export default App;
