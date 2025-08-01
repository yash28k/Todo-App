import TodoItem from "./TodoItem";

const TodoItems = ({todoItems, onDeleteClick}) => {
  return (
    <>
      <div className="item-container  ">
        {todoItems.map(item => <TodoItem key={item.name} todoName={item.name} todoDate={item.date} onDeleteClick={onDeleteClick}></TodoItem> )}
      </div>
    </>
  );
};

export default TodoItems;      