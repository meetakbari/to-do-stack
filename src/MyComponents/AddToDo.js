import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function AddToDo({addTodo}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) =>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description shouldn't be blank!");
    }else{
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }
  return (
    <div className="container-sm rounded-2 mt-5 mb-5 p-4" id="addTask">
      <h4 className="mb-3">Add a To Do Task</h4>
      <Form onSubmit={submit}>
        <Form.Group controlId="formToDoTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter a title of the task" />
        </Form.Group>

        <Form.Group controlId="formToDoDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            placeholder="Enter a description of the task"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn btn-primary btn-md">
          Add to Stack
        </Button>
      </Form>
    </div>
  );
}
