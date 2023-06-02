import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

function DeleteModal({ setDeleteModal, setDeleteData, li }) {
  const deleteSqHandler = () => {
    setDeleteData(li);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          height: "54px",
          width: "120px",
          position: "absolute",
          top: "15px",
          left: "65px",
          fontSize: "16px",
          padding: "5px",
          textAlign: "center",
        }}
      >
        <div>Confirm delete</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
            marginTop: "8px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faCheck} onClick={deleteSqHandler} />
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={() => setDeleteModal(null)}
          />
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
