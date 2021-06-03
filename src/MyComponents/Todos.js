import React, { useState } from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {

    const [searchWord, setSearchWord] = useState('');

    let searchBox = {
        'outline': "none",
        "border-radius": "5px"
    }
    return (
        <div className="container text-center my-4">
            {props.todos.length === 0 ? <h5 className="m-5 text-danger">Your To Do Stack is Empty!</h5> :
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="searchBox mt-2 mb-3" >
                        <input type="search" className="py-1 px-3" style={searchBox} name="searchTodo" id="searchTodo" placeholder="Search my to do" onChange={(event) => { setSearchWord(event.target.value) }} />
                    </div>
                    {searchWord.length !== 0
                        ?
                        <div>
                            {props.todos.filter((todo) => {
                                if (searchWord === "") {
                                    return todo
                                } else if (todo.desc.toLowerCase().includes(searchWord.toLowerCase())) {
                                    return todo
                                }
                            }).map((todo) => {
                                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onComplete={props.onComplete} />
                            })
                            }
                        </div>
                        :
                        <div>
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
