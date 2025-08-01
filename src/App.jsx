import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  //Add new todo item.
  const handleNewItem = (todoName, todoDate) => {
    //Validate inputs(ignore blank or spaces only)
    if (
      !todoName ||
      todoName.trim() === "" ||
      !todoDate ||
      todoDate.trim() === ""
    ) {
      return;  //do nothing if invalid.
    }

    const newTodoItem = [...todoItems, { name: todoName, date: todoDate }];
    setTodoItems(newTodoItem);
  };

  //Delete todo item by name.
  const handleDeleteItem = (todoItemName) => {
    const newtodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newtodoItem);
    console.log(`item deleted ${todoItemName}`);
  };

  return (
    <>
    <Container>
      <div className={styles.todoContainer}>
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </div>
    </Container>  
    </>
  );
}

export default App;
