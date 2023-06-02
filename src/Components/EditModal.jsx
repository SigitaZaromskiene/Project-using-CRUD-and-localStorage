import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function EditModal({ editModal, numbers, setNewSq, setEditData, setEditModal}) {
  const [number, setNumber] = useState(editModal.number);
  const [color, setColor] = useState(editModal.color);
  const [range, setRange] = useState(editModal.range)

  const editHandler = ()=>{
    setEditData({
      color:color,
      number:parseInt(number),
      range:parseInt(range),
      id: editModal.id,
    })
    setEditModal(null)
  }


     return (
    <div>
      <div className="edit-dice">
        <div className="dice-bin-2">
          <div className="dice-frame-2">
            <div
              className={"dice-" + number}
              style={{ fontSize: range + "px", color }}
            ></div>
          </div>
          <div
            style={{
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              
            }}
          >
            <div style={{ display: "flex", gap: "10px", cursor: "pointer" }}>
              <input
                type="range"
                value={range}
                min="80"
                max="150"
                onChange={(e) => setRange(e.target.value)}
              ></input>
              <label>{range}</label>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <input
                className="color-range-2"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <button onClick={editHandler}className="button-1" >
                Edit
              </button>
              <button onClick={()=>setEditModal(null)}>Cancel</button>
            </div>
          </div>
        </div>
        <div className="numbers-bin-2">
          {numbers.map((num, i) => (
            <div
              className="numbers-2"
              key={i}
              checked={number === num.num}
              onClick={() => setNumber(num.num)}
            >
              {num.number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default EditModal;
