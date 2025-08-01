import styles from "./AddTodo.module.css";
import { RiAddCircleFill } from "react-icons/ri";
import { useState } from "react";
const AddTodo = ({onNewItem}) => {


  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  }

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");

  }



  return (
    <>
      <div className={styles.kgRow}>
        <div className="row align-items-center">
          <div className="col-6"><input className={styles.input} type="text" placeholder="Enter Todo Here" onChange={handleNameChange} value={todoName} /></div>
          <div className="col-4"><input className={styles.input} type="date" onChange={handleDateChange} value={todoDate} /></div>
          <div className="col-2"><button type="button" className="btn btn-success" 
          onClick={handleAddButtonClicked}>
            <RiAddCircleFill />
            </button></div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
