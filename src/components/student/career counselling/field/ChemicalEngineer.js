import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button,Dropdown } from 'react-bootstrap'

const ChemicalEngineer = () => {
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
                <h1 class="container text-center">Chemical Engineer</h1>

                <br></br>
                <h5 class="container text-justify" align="justify">
                    Chemical Engineering job opportunities are numerous. Some of those job opportunities are mentioned below.
                    <br></br>
                    <br></br>
                    <ul>
                        <li>Biotechnologist</li>
                        <li>Energy Engineer</li>
                        <li>Chemical Engineer</li>
                        <li>Colour Technologist</li>
                        <li>Petroleum Engineer</li>
                        <li>Product/ Process Development Scientist</li>
                    </ul>
                    <br></br>
                    The scope of Chemical Engineering expands very broadly with applications in numerous sectors. Chemical Engineering is a major tool to bring in research and developments in many fields that are related to biology, medicine, environmental science, research science, technology and more.
                    <br></br>
                    <br></br>
                    For example- the field of Biochemical Engineering which consists of the study of a wide range of Genetic Engineering technologies employs Chemical Engineers to pave the way for several cures and treatments. It allows the scope for a future with lesser terminal conditions like cancer.
                    <br></br>
                    <br></br>
                    The possibilities of Chemical Engineering span more than the Medical field. A career in Chemical Engineering lets you delve deeper into research for finding efficient ways of using oils and fuels.
                    <br></br>
                    <br></br>
                    With the increasing demand for gas and petrol, the demand for Chemical Engineers is higher than ever.
                    <br></br>
                    <br></br>
                    Even military forces are looking for Chemical Engineers, specializing in Polymer Engineering, where they can work with the military for developing better weapons.
                    <br></br>
                    <br></br>
                    A wide range of industries like Pharmaceuticals, Information Technology and Energy apply Chemical Engineering in their advancement, offering excellent opportunities for Chemical Engineering graduates all over the country.
                    <br></br>
                    <br></br>
                    Therefore, an individual pursuing a career in Chemical Engineering will never be disappointed with an endless spectrum of opportunities and chances to shine.
                </h5>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default ChemicalEngineer;
