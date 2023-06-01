import { v4 as uuidv4 } from "uuid";

function List({ list }) {
  if (list === null) {
    return "Loading...";
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "10px",
        height: "250px",
      }}
    >
      {list.map((li) => (
        <div
          key={uuidv4()}
          style={{
            width: "250px",
            height: "250px",
            border: "1px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={"dice-" + li.number}
            style={{ color: li.color, fontSize: li.range }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default List;
