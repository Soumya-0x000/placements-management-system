import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button,Dropdown } from 'react-bootstrap'

const UiUxDesigner = () => {
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
                <h1 class="container text-center">UI/UX Designer</h1>

                <br></br>
                <h5 class="container text-justify">
                    If you truly love the work of user experience design, and enjoy each part of the design process from initial
                    research to creating user flows and mockups, you may choose to align your career path entirely with the UX Designer job description.
                    <br></br>
                    <br></br>
                    When you start looking for your first position as an aspiring UX designer, you might focus on landing a junior or mid-level position.
                    However, depending on your background and experience, there are many more senior UX designer positions that place an emphasis on leadership and project management.
                    <br></br>
                    <br></br>
                    UX/UI Designers are typically generalists who are involved in all aspects of the design process with a particular focus on usability.
                    <br></br>
                    <br></br>
                    Granted, this depends in a large part on the particular company and team that you end up working for. In a large company, design roles tend to be more siloed, so you may have UX/UI Designers, Visual Designers, UX Researchers, and more. In a small company or startup, the UX/UI Designer may be the sole person responsible for all design decisions across those roles, and therefore be a true generalist.
                    <br></br>
                    <br></br>
                    Associate to mid-level UX/UI Designers will generally be handling execution rather than strategy. Expect to be exposed to the entire design process, but not necessarily asked to shape strategy or present to clients or senior management on a regular basis.
                    <br></br>
                    <br></br>
                    For those less keen on UX manager roles, it is also possible to work your way up to advanced UX roles, such as a lead designer role, as you expand your capabilities and take on more complex work.
                    <br></br>
                    <br></br>
                    However, as UX designers gain experience and more responsibilities, they can also progress to managerial positions in UX including Director level positions.
                    As well as great technical and strategic level knowledge in the field of UX design, you'd be expected to have plenty of UX experience and solid soft skills including in interpersonal communication, leadership, and management.
                    <br></br>
                    <br></br>
                    Often confused with UX Designers, the role of UI Designer is frequently misunderstood. While there is a bit of overlap that
                    exists between UX and UI design, a UI Designer tends to be responsible for the interface the point where a user meets with a product or website.
                    This could be a touchscreen, keyword board, button or audio output, for example. Meanwhile a UX Designer will usually work on the product or website's overall look and feel.
                    <br></br>
                    <br></br>
                    A UI Designer will often be tasked with creating an interface that is easy to use, for example in an app or on a website.
                    Many who end up as UI designers find their calling through exposure to the discipline, either as part of study or while working in a related UX role.
                    Often, UI and UX roles are combined, however UI specialist roles do exist and can be an excellent route for some.
                </h5>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default UiUxDesigner;
