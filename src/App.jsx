import "./App.scss";
import Create from "./Components/Create";
import List from "./Components/List";
import { read, create, destroy, edit } from "./Components/localStorage";
import { useEffect, useState } from "react";
import Message from "./Components/Message";
import { v4 as uuidv4 } from "uuid";

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

  const [deleteModal, setDeleteModal] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const [editModal, setEditModal] = useState(null);
  const [editData, setEditData] = useState(null);

  const [message, setMessage]= useState(null)


  const msg=(text)=>{
    setMessage(m=>[...m ?? [], {text, id:uuidv4}])
  }

  useEffect(() => {
    setList(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if (newSq === null) {
      return;
    }
    create(KEY, newSq);
    msg('Dice was created')
    setLastUpdate(Date.now());
  }, [newSq]);

  useEffect(() => {
    if (deleteData === null) {
      return;
    }
    destroy(KEY, deleteData.id);
    setLastUpdate(Date.now());
  }, [deleteData]);


  useEffect(()=>{
    if(editData === null){
      return
    }
    edit(KEY, editData, editData.id)
    setLastUpdate(Date.now());
  }, [editData])

  return (
    <div className="container">
      <div className="content">
        <div className="left">
          <Create numbers={numbers} setNewSq={setNewSq} />
        </div>
        <div className="right">
          <List
            list={list}
            setList={setList}
            setDeleteModal={setDeleteModal}
            setDeleteData={setDeleteData}
            deleteModal={deleteModal}
            setEditModal={setEditModal}
            setEditData={setEditData}
            editModal={editModal}
            numbers={numbers}
            setNewSq={setNewSq}
           
          ></List>
        </div>
     
      </div>
      {message ? <Message message={message}/>: null}
    </div>
  );
}

export default App;
