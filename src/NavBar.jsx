import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div style={{ padding: 20, outerWidth: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Navbar>
                    <Container>
                        <Navbar.Brand>Link Shortner</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                A project by: <a href="https://github.com/Dank-del">Dank-del</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>
            </React.Fragment>
        );
    }
}

export default NavBar;