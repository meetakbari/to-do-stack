import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    let TodosStyle = {
        minHeight: "50vh"
    }
    return (
        <div className="container text-center my-4" style={TodosStyle}>
            {props.todos.length===0 ? <h5 className="m-5 text-danger">Your To Do Stack is Empty!</h5> :
            <div className="d-flex flex-row justify-content-center flex-wrap">
                {props.todos.map((todo) =>{
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onComplete={props.onComplete}/>
                })}
            </div>
            }
        </div>
    )
}
