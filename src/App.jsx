import "./App.scss";
import Create from "./Components/Create";

const numbers = [
  { number: "One", num: "1" },
  { number: "Two", num: "2" },
  { number: "Three", num: "3" },
  { number: "Four", num: "4" },
  { number: "Five", num: "5" },
  { number: "Six", num: "6" },
];

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="left">
          <Create numbers={numbers} />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;
