import React from 'react'
import { Card, Button } from "react-bootstrap";

import './Style.css'

export default function TodoItem({ todo, onDelete, onComplete }) { //this is called the de-structuring 

    return (
        <div>
            <Card className="card">
                <Card.Body>
                    <Card.Text>{todo.desc}</Card.Text>
                    <div className="btns">
                        <Button variant="success" className="btn btn-sm" onClick={() => { onComplete(todo) }}>Done</Button>
                        <Button variant="danger" className="btn btn-sm" onClick={() => { onDelete(todo) }}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
