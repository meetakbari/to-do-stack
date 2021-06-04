import React, { useState } from 'react'
import TodoItem from './TodoItem'

import './Style.css'

export default function Todos(props) {

    const [searchWord, setSearchWord] = useState('');

    return (
        <div className="container text-center my-4">
            {props.todos.length === 0 ? <h5 className="m-5 text-danger">Your To Do Stack is Empty!</h5> :
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="searchBox mt-2 mb-3" >
                        <input type="search" className="py-1 px-3 searchBox" name="searchTodo" id="searchTodo" placeholder="Search my to do" onChange={(event) => { setSearchWord(event.target.value) }} />
                    </div>
                    {searchWord.length !== 0
                        ?
                        <div className="todos-container">
                            {props.todos.filter((todo) => {
                                
                                if (todo.desc.toLowerCase().includes(searchWord.toLowerCase())) {
                                    return todo
                                }else if(searchWord === ""){
                                    return todo
                                }
                                return ''
                            }).map((todo) => {
                                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onComplete={props.onComplete} />
                            })
                            }
                        </div>
                        :
                        <div className="todos-container">
                            {props.todos.map((todo) => {
                                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onComplete={props.onComplete} />
                            })}
                        </div>
                    }
                </div>
            }
        </div>
    )
}
