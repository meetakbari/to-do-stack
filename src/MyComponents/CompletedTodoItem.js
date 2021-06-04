import React from 'react'
import { Card, Button } from "react-bootstrap";

import './Style.css'

export default function CompletedTodoItem({ todo, onDeleteCompleted, onUndo}) { //this is called the de-structuring 
    return (
            <Card className="card">
                <Card.Body>
                    <Card.Text>{todo.desc}</Card.Text>
                    <div className="btns">
                        <Button color="success" className="btn btn-sm" onClick={() => { onUndo(todo) }}>Undo</Button>
                        <Button variant="danger" className="btn btn-sm" onClick={() => { onDeleteCompleted(todo) }}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
    )
}
