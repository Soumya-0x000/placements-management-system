import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button ,Dropdown} from 'react-bootstrap'

const ComputerHardwareEngineer = () => {
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container fluid>
                    <img src="https://www.igauge.in/admin/uploaded/rating/logo/CambridgeInstituteLatestLogo2_1623754797.png" height="40" width="110" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-1 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="StudentHome">Home</Nav.Link>
                            <Nav.Link href="StudentSchedule">Schedule</Nav.Link>
                            <Nav.Link href="createResume">Resume</Nav.Link>
                        </Nav>


                        <div className="col-md-6 mx-auto" >
                            <Form className="d-flex ">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </div>
                        <Dropdown className="me-auto my-1 my-lg-0">
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-Login">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="container text-center">
                <br></br>
                <br></br>
                <h1 class="container text-center">Computer Hardware Engineer</h1>

                <br></br>
                <h5 class="container text-justify" align="justify">
                    Computer hardware engineering is undoubtedly a brilliant career choice. With the rise of artificial intelligence systems,
                    cellular devices and high-tech computers, tablets and laptops, the demand for these professionals is going to multiply over time.
                    Computer hardware engineers create computer systems and their components, including processors, hard drives, networks and circuit boards. They work on every aspect of hardware creation, including research, design, development, testing and production.
                    <br></br>
                    <br></br>
                    Hardware engineers often spend their days creating blueprints, testing prototypes, updating and improving old equipment and
                    overseeing the creation of their designs. They typically work within an office setting and often as part of a team. In many cases, computer
                    hardware engineers work closely with software engineers to ensure their equipment works with the latest software updates.
                    <br></br>
                    <br></br>
                    Computer Hardware Engineers research, design, and build computer systems. They combine their expertise and knowledge in information technology, electronics, and engineering to design and test
                    the various components of computer structures. They develop computer equipment like routers, processors, and circuit boards.
                    <br></br>
                    <br></br>
                    A Computer Hardware Engineer is responsible for developing parts of a computer system. They may work independently or as part of a team of other technology professionals.
                    They identify problems and come up with ways to solve them, as well as develop technology improvements.
                    Some typical job duties include:
                    <br></br>
                    <br></br>
                    <ul>
                        <li>Designing new computer equipment and hardware</li>
                        <li>Making models of new hardware and testing those models</li>
                        <li>Analyzing test results</li>
                        <li>Upgrading computer equipment to increase compatibility with new software</li>
                        <li>Working with software engineers</li>
                        <li>Overseeing the manufacturing process</li>
                    </ul>
                </h5>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default ComputerHardwareEngineer;
