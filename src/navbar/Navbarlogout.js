import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';

const Nabur = () => {
    const navigate = useNavigate();

    const Logout = async () => {
        try {
            await axios.post('https://jcc.brandingyou.id/api/logout').then(res => {
                navigate("/");
            });
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <Navbar bg="dark" variant="dark" fixed="top" >
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <NavLink onClick={Logout} className="button is-light">Log Out</NavLink>
                </Nav>
            </Container>
        </Navbar>
        // <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        //     <div className="container">
        //         <div className="navbar-brand">
        //             <a className="navbar-item" href="/">
        //                 {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" /> */}
        //             </a>

        //             <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        //                 <span aria-hidden="true"></span>
        //                 <span aria-hidden="true"></span>
        //                 <span aria-hidden="true"></span>
        //             </a>
        //         </div>

        //         <div id="navbarBasicExample" className="navbar-menu">
        //             <div className="navbar-start">
        //                 <a href="/" className="navbar-item">
        //                     Home
        //                 </a>
        //             </div>

        //             <div className="navbar-end">
        //                 <div className="navbar-item">
        //                     <div className="buttons">
        //                         <button onClick={Logout} className="button is-light">
        //                             Log Out
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Nabur;