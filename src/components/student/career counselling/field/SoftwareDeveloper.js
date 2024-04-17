import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button,Dropdown } from 'react-bootstrap'

const SoftwareDeveloper = () => {
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
                <h1 class="container text-center">Software Developer</h1>

                <br></br>
                <h5 class="container text-justify" align="justify">
                    Software engineering involves the development of computer system software and application software. Software Engineers analyze the user's requirements
                    specific to the software and create software that meets those requirements with the help of programming languages and
                    other software. The field of software engineering is growing at a swift pace. There are new technologies such as
                    cloud computing, machine learning, artificial intelligence, IoT, Dev OPS, etc. which have increased the demand for Software Engineers specialized in these fields.
                    There is an increased demand for high performing computer Software Engineers. As a result of which, there will be an increase
                    of jobs in software engineering by 21% through 2028. Overall, it is a high demand career from future prospective.
                    <br></br>
                    <br></br>
                    Software Engineers have to discuss with clients to begin the development of the project and then design programs to
                    meet those requirements. With the help of charts and diagrams, they represent the software visually then write code
                    to create the final product. The testing team then performs the testing and finds and gets the issues fixed before
                    final delivery. It is completely teamwork consisting of development and testing teams. The work hours are generally to 8 to 9 hours,
                    but sometimes, there is an extension of the regular working hours to meet the project deadlines under more pressure.
                    <br></br>
                    <br></br>
                    The most famous roles in Software Engineering consists of Front end developer, back end developer, full-stack developer,
                    QA Engineer, Dev Ops Engineer, Security Engineer, Project Manager, CEO, etc. The salary varies according to the roles,
                    and most salary is withdrawn by the Cos and Project Managers. There are different types of specializations in Software Engineering
                    consisting of Software developer, System Analyst, QA Engineer, Software Consultant,
                    and Software Project Manager. Software Developer is the most common option who does all the programming related stuff.
                    <br></br>
                    <br></br>
                    Software developers make a good system analyst. QA Engineers are responsible for performing the validation of the software developed.
                    Good knowledge of software development and products makes good software consultants. Project Managers have software skills in
                    addition to management skills.
                    <br></br>
                    <br></br>

                    An estimated salary of a software engineer is Rs 8 Lakh which can further grow up to Rs 20 Lakh. At the entry-level, the salaries are
                    around Rs 15000 to Rs 50000. At mid-career level, the salary grows up to Rs 1 Lakh and at Rs 2 Lakh at the senior level.
                    The leading companies that hire Software Engineers routinely are Infosys, Amazon, TCS, Tech Mahindra, Accenture, HCL, etc. Top cities
                    where Software Engineers are in demand are Bangalore, Pune, Chennai, Hyderabad, Gurgaon, etc. with Bangalore as the highly paid city.
                </h5>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default SoftwareDeveloper;
