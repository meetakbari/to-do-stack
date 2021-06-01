import React from 'react'
import { Card, Button } from 'react-bootstrap'
export default function About() {
    return (
        
        <div className="container mt-5">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Purpose of creating this WebApp</Card.Title>
                    <Card.Text>
                        Give users a free platform to maintain their daily tasks efficiently!</Card.Text>
                    <a href="https://github.com/meetakbari/todo-stack" target="_blank" rel="noreferrer"><Button variant="primary">Source Code</Button></a>
                </Card.Body>
                <Card.Footer className="text-bold">Thank you for choosing us! Do visit again :)</Card.Footer>
            </Card>
        </div>
    )
}
