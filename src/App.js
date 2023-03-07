import logo from "./logo.svg";
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
