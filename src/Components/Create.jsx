import { useState, useEffect } from "react";
import Button from "./Button";
import { read, create } from "./localStorage";

const KEY = "NAUJAS";

function Create({ numbers }) {
  const [number, setNumber] = useState(1);
  const [color, setColor] = useState("white");
  const [range, setRange] = useState(50);
  const [newSq, setNewSq] = useState(null);
  const [list, setList] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    setList(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if (newSq === null) {
      return [];
    }
    create(KEY, newSq);
    setLastUpdate(Date.now());
  }, [newSq]);

  return (
    <>
      <div className="dice-container">
        <div className="dice-frame">
          <div
            className={"dice-" + number}
            style={{ fontSize: range + "px", color: color }}
          ></div>
        </div>
        <div className="numbers-container">
          {numbers.map((n) => (
            <div onClick={() => setNumber(n.num)} className="numbers">
              {n.number}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            gap: "25px",
          }}
        >
          <label>{range}</label>
          <input
            type="range"
            min="50"
            max="150"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <input
            type="color"
            style={{ width: "120px" }}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <Button
          setNewSq={setNewSq}
          color={color}
          number={number}
          range={range}
        ></Button>
      </div>
    </>
  );
}

export default Create;
