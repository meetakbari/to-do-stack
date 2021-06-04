import React from 'react'
import CompletedTodoItem from './CompletedTodoItem'

import './Style.css'

export default function Todos(props) {
    
    return (
        <div className="container text-center my-4">
            {(props.addedtodos.length === 0 && props.todos.length === 0) ? <h5 className="m-5 text-danger">Nothing to show here :(</h5> :
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    {props.todos.length === 0 ? <h5 className="m-5 text-danger">Hurry up...!</h5> :
                        <div className="todos-container">
                            {props.todos.map((todo) => {
                                return <CompletedTodoItem todo={todo} key={todo.sno} onDeleteCompleted={props.onDeleteCompleted} onUndo={props.onUndo} />
                            })}
                        </div>
                    }
                </div>
            }
        </div>
    )
}