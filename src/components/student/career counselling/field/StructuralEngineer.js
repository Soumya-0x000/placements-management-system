import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button ,Dropdown} from 'react-bootstrap'

const StructuralEngineer = () => {
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
                        <Button variant="outline-dark">
                         <Dropdown className="me-auto my-1 my-lg-0">
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-Login">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>

                        </Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="container text-center">
                <br></br>
                <br></br>
                <h1 class="container text-center">Structural Engineer</h1>

                <br></br>
                <h5 class="container text-justify" align="justify">
                    Structural engineering is one of the most important engineering disciplines because it deals with designing, constructing, and maintaining systems that support human life. The future of structural engineering is very bright, and there are many opportunities for career growth in this field. Here are a few tips to help you prepare for a career in structural engineering:
                    <br></br>
                    <br></br>
                    1. Get started with a foundation in math and anatomy. Structural engineers need to be able to understand how things work mathematically, and they need to be aware of the anatomy of structures. A basic understanding of calculus and linear algebra will help you in this area.
                    <br></br>
                    <br></br>
                    2. Be familiar with computer-aided design (CAD). CAD is the tool used to design and simulate the behavior of structures. It can be used to create drawings, 3D models, and simulations. If you want to become a structural engineer, you need to be proficient in using CAD software.
                    <br></br>
                    <br></br>
                    3. Have a strong understanding of materials science and engineering. Structural engineers must be familiar with various materials and their properties. They also need to know how to use these materials structurally soundly. In order to become a successful structural engineer, you need to have a strong understanding of materials science and engineering.
                    <br></br>
                    <br></br>
                    4. Have a strong understanding of construction methods and practices. Structural engineers must be familiar with various construction methods and practices. They need to understand how different types of construction tasks can affect the behavior of structures. To become a successful structural engineer, you need to have a strong understanding of construction methods and practices.
                    <br></br>
                    <br></br>
                    5. Have experience using simulation tools. Structural engineers need to be able to use simulation tools to understand the behavior of structures. These tools can be used to create 3D models and simulations of the structure’s behavior. In order to become a successful structural engineer, you need to have experience using simulation tools.
                    <br></br>
                    <br></br>
                    6. Have experience working with clients and stakeholders. Structural engineers need to be able to work with clients and stakeholders. They need to be able to communicate effectively with them, and they need to understand their needs. In order to become a successful structural engineer, you need to have experience working with clients and stakeholders.
                    <br></br>
                    <br></br>
                    7. Have a strong understanding of design principles. Structural engineers need to understand the principles of design. This includes understanding how materials and structures interact, as well as how to optimize the design. In order to become a successful structural engineer, you need to have a strong understanding of design principles.
                    <br></br>
                    <br></br>
                    8. Have experience working in a team environment. Structural engineers need to be able to work in a team environment. They need to be able to communicate with other team members, and they need to be able to work together as a cohesive unit. In order to become a successful structural engineer, you need to have experience working in a team environment.
                    <br></br>
                    <br></br>
                    9. Have a strong work ethic. Structural engineers need to be able to work hard and stay focused on their tasks. They need to be able to handle pressure and deadlines, and they need to be able to work independently as well as in a team setting. In order to become a successful structural engineer, you need to have a strong work ethic.
                    <br></br>
                    <br></br>
                    10. Have a degree in structural engineering. A degree in structural engineering is the minimum requirement for becoming a successful structural engineer. However, experience and skills are also important.
                    <br></br>
                    <br></br>
                    These are just a few tips to help you prepare for a career in structural engineering. If you want to pursue a career in this field, be sure to study hard and gain the skills and experience necessary to be successful.
                </h5>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default StructuralEngineer;
