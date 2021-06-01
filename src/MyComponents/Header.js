import React from 'react'
import { Nav, Navbar, Button, FormControl, Form } from 'react-bootstrap';
import PropTypes from 'prop-types'
export default function header(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand.Link href="/" >{props.title}</Navbar.Brand.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                {/* trick1------1 */}
                {props.searchBar ? <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> : ""}
            </Navbar.Collapse>
        </Navbar>
    )
}

header.defaultProps = {
    title: "Title Here",
    searchBar: true
}
header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}