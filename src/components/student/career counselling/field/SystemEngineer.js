import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button ,Dropdown} from 'react-bootstrap'

const SystemEngineer = () => {
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
                <h1 class="container text-center">System Engineer</h1>

                <br></br>
                <h5 class="container text-justify" align="justify">The system engineer is a highly demanded profession in industries as well as in government. They are an essential resource for the technical development and maintenance of complex systems. Some of the top recruiters who actively hire System Engineers are as follows:
                    <br></br>
                    <br></br>

                    <ul>
                        <li>Tata Consultancy Services (TCS)</li>
                        <li>IBM</li>
                        <li>Cognizant Technology Solutions</li>
                        <li>Tech Mahindra</li>
                        <li>NVIDIA</li>
                        <li>Salesforce</li>
                        <li>EPAM</li>
                        <li>Accenture</li>
                        <li>Qualcomm</li>
                        <li>Persistent Systems</li>
                        <li>FactSet</li>
                        <li>Verizon</li>
                    </ul>
                    In addition to the IT industry, there are a number of other industries that need system engineers. Some of these industries include:
                    <br></br>
                    <br></br>
                    <ul>
                        <li><b>Defense industry:</b> Companies like ESSI Security and Defence, and Mistral Solutions fall in this category.</li>
                        <li><b>Aerospace industry:</b> Companies like York Space Systems, Syncroness, and Boeing fall in this category.</li>
                        <li><b>Electronics industry:</b> Companies like Qualcomm, PiServe, and Tesla fall in this category.</li>
                    </ul>
                    The reason for the high demand for system engineers is because they combine all the engineering department input into a system to maximize
                    production. They figure out how to make things better by avoiding waste of time, manpower, money, material, and other resources.

                    <br></br>
                    <br></br>
                    The demand for system engineers is there in national as well as international markets. They are a vital part of most companies. CNN (Cable News Network Inc.) ranks Systems Engineering as one of the top 50 jobs in the U.S (in terms of pay and quality of life), and the Bureau of Labor Statistics predicts a faster-than-average 10-percent growth rate in employment opportunities for Industrial engineers,
                    including System Engineers, by 2026. So choosing this as your profession can be the best decision based on your interest.
                </h5>

                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default SystemEngineer;
