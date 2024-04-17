import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button,Dropdown } from 'react-bootstrap'

const ElectricalEngineer = () => {
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
                <h1 class="container text-center">Electrical Engineer</h1>

                <br></br>
                <h5 class="container text-justify" align="justify">
                    Electrical Engineering is a subject that deals with the study of the application of electricity,
                    electronics and electromagnetism. A student has to learn transmission and generation of electric power,
                    electric circuit design, electronics and instrumentation and control systems. Professional electrical engineers
                    design various electric circuits and equipment to work on large power plants, hardware companies which include
                    designing, manufacturing and operating of various power plants, industrial machinery, electrical motors, computer
                    chips and ignition systems for automobiles, aircraft, space crafts and all kinds of engines. Electrical Engineering
                    is spread across a range of specialities such as acoustics, speech, signal processing to electromagnetic compatibility,
                    automobiles to vehicular technology, geoscience and remote sensing, laser and electro-optics, robotics, ultra-sonic,
                    ferroelectrics and frequency control.
                    <br></br>
                    <br></br>
                    The job prospects in the power industry/construction are in high demand. One ought to have sound theoretical knowledge of
                    electricity. This job calls for analyzing procedural functions of engineering to do the software encoding.
                    <br></br>
                    <br></br>
                    Some of the common designations offered to Electrical Engineers are Power Engineers, Telecommunication Engineer, Nuclear Engineer, Design Engineer, Consultants and as a System Analyst. The job profile includes designing, manufacturing and maintaining engine's flow of power with specialized skills in microelectronics design. Various power plants, motors, the ignition system of automobiles, spacecraft and engines are researched in various ways to compute the cost of manufacture with its related specifications. They prepare, analyze and review reports based on data prepared and provide necessary technical support as and when required. Data needs to be interpreted prepared based on the given documentation. The job of an
                    Electrical Engineer is always hectic, his outdoor activities include a visit to the site if required when on a call.
                    <br></br>
                    <br></br>
                    The job involves meeting with new clients and local authorities about new designs and circuits that are manufactured and when and where it can be implemented in various sectors. The project sometimes includes coordinating with other engineers, scientists, lawyers and technicians, as needed. Sometimes work hours are stretched to meet the project deadline. Often, he/she needs to travel to another city on official work. Staying away from family sometimes is a part of the job, especially
                    when he/she has to go on official trips nationationally and internationally to represent his/her company's project work.
                </h5>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default ElectricalEngineer;
