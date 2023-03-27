import React, { useState, useEffect } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import styled from "styled-components";
import "./App.css";

// 1. Create a new React component called "TodoList" that renders a list of to-do items.
//    Each to-do item should consist of a checkbox, a label displaying the text of the to-do, and a delete button.

// 2. Create a new React component called "TodoForm" that renders a form for adding new to-do items.
//    The form should consist of a text input for entering the text of the new to-do item and a button
//    for adding the item to the list.

// 3. In The "App" component render the TodoList and TodoForm components.

// 4. Add functionality to the TodoList component that allows the user to toggle the completion status of a to-do item
//    by clicking on its checkbox. Completed to-do items should be displayed with a strikethrough.

// 5. Add functionality to the TodoList component that allows the user to delete a to-do item by clicking on its delete button.

// 6. Add functionality to the TodoForm component that allows the user to add a new to-do item to the list when the form is submitted.

// 7. Add some basic styling to the app to make it visually appealing.

// You may also want to consider additional features such as filtering the to-do list by
// completion status or due date, editing existing to-do items, or persisting the to-do list
// data using local storage. However, these are not required for the basic test.

// Good luck with the test!

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  background: lightblue;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
`;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <Title>Todo List</Title>
      <TodoFormContainer>
        <TodoForm onAddTodo={addTodo} />
      </TodoFormContainer>
      <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
    </Container>
  );
}

const TodoFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  input {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #FFF;
    width: 165px;
  }

  button {
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    margin-right: 0px;
    background-color: #0066FF;
    color: #FFF;
    border: 2px solid #0066FF;
  }

  button:hover {
    background-color: #003399;
    border: 2px solid #003399;
    cursor: pointer;
  }
`;

export default App;
