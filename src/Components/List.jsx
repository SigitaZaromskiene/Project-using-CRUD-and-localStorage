import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "./DeleteModal";

function List({ list, setDeleteData, setDeleteModal, deleteModal }) {
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
            position: "relative",
          }}
        >
          <div
            className={"dice-" + li.number}
            style={{ color: li.color, fontSize: li.range }}
          ></div>
          <FontAwesomeIcon
            className="exit"
            icon={faCircleXmark}
            onClick={() => setDeleteModal(li)}
          />
          {deleteModal && deleteModal.id === li.id ? (
            <DeleteModal
              deleteModal={deleteModal}
              setDeleteData={setDeleteData}
              li={li}
              setDeleteModal={setDeleteModal}
            />
          ) : null}
          <FontAwesomeIcon className="edit" icon={faPenToSquare} />
        </div>
      ))}
    </div>
  );
}

export default List;
