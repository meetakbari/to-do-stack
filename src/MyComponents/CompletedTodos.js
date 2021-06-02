import React from 'react'
import CompletedTodoItem from './CompletedTodoItem'

export default function Todos(props) {
    let TodosStyle = {
        minHeight: "50vh"
    }
    return (
        <div className="container text-center my-4" style={TodosStyle}>
            {props.addedtodos.length === 0 ? <h5 className="m-5 text-danger">Nothing to show here :(</h5> :
                <>
                    {props.todos.length === 0 ? <h5 className="m-5 text-danger">Hurry up...!</h5> :
                        <div className="d-flex flex-row justify-content-center flex-wrap">
                            {props.todos.map((todo) => {
                                return <CompletedTodoItem todo={todo} key={todo.sno} onDeleteCompleted={props.onDeleteCompleted} onUndo={props.onUndo} />
                            })}
                        </div>
                    }
                </>
            }
        </div>
    )
}