import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddToDo from "./MyComponents/AddToDo";
import About from "./MyComponents/About";
import Dashboard from "./MyComponents/Dashboard"
import CompletedTodos from "./MyComponents/CompletedTodos";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  // for todos
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // for completed todos
  let initCompletedTodo;
  if (localStorage.getItem("completed") === null) {
    initCompletedTodo = [];
  }
  else {
    initCompletedTodo = JSON.parse(localStorage.getItem("completed"));
  }

  // to delete the todo
  const deleteTodo = (todo) => {
    let responseOfDelete = window.confirm("Are you sure want to delete?");
    if (responseOfDelete === true) {
      //   alert("Woohooo! One less task to do.");
      // }
      //console.log("I am on delete of", todo);
      // Deleting following way in react doesn't work
      // let index = todos.indexOf(todo);
      // todos.splice(index, 1);
      setTodos(
        todos.filter((e) => {
          return e !== todo;
        })
      );
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  // to delete the completed todo
  const deleteCompletedTodo = (todo) => {
    setCompleted(
      completed.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("completed", JSON.stringify(completed));

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // to move todo from todo window to completed window
  const completedTodo = (todo) => {
    setCompleted([...completed, todo])
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // to undo the completedTodo action
  const undoCompletedTodo = (todo) => {
    setCompleted(
      completed.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("completed", JSON.stringify(completed));
    setTodos([...todos, todo]);
  }

  // to add new todo
  const addTodo = (desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let myTodo = {
      sno: sno,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  
  // state defined for all the todos
  const [todos, setTodos] = useState(initTodo);

  // state defined for all the completed todos
  const [completed, setCompleted] = useState(initCompletedTodo);

  // when todos are manipulated, useEffect will render the updated components.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  // when completed todos are manipulated, useEffect will render the updated components.
  useEffect(() => {
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [completed])

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Dashboard />
                <Todos todos={todos} onDelete={deleteTodo} onComplete={completedTodo} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/todos" render={() => {
            return (
              <>
                <Dashboard />
                <Todos todos={todos} onDelete={deleteTodo} onComplete={completedTodo} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/completed" render={() => {
            return (
              <>
                <Dashboard />
                <CompletedTodos addedtodos={todos} todos={completed} onDeleteCompleted={deleteCompletedTodo} onUndo={undoCompletedTodo} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/addnew" render={() => {
            return (
              <>
                <Dashboard />
                <AddToDo addTodo={addTodo} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about" render={() => {
            return (
              <About />
            )
          }}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
