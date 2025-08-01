import styles from './TodoItem.module.css';
import { MdDelete } from "react-icons/md";


const TodoItem = ({todoName, todoDate, onDeleteClick}) => {
  return (
    <>
      <div className={styles.kgRow}>
        <div className="row align-items-center">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
            >
              <MdDelete /> </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
