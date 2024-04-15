import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button, Card, Figure, Dropdown } from 'react-bootstrap'

const AdminHome = () => {
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
                            <Nav.Link href="/AdminHome">Home</Nav.Link>
                            <Nav.Link href="/AdminJobPosting">Job Posted</Nav.Link>
                            <Nav.Link href="/AdminPlacedStudent">Placed Students</Nav.Link>
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


            <Figure>
                <Figure.Image
                    width={1520}
                    height={500}
                    alt="1520x500"
                    src="https://blog.admissions.illinois.edu/wp-content/uploads/2019/11/feature-1500x500-how-to-ace-your-job-interview.png"
                />

            </Figure>
            <br></br>
            <br></br>

            <div className="container text-center">
                <div className="row justify-content-start">
                    <div className="d-flex justify-content-around">
                        <a href='/admin/companies'>
                            <Button bg='dark' variant="light">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/building-logo-vector-template-premium-logo-designs-building-logo-vector-template-169658475.jpg" />
                                    <Card.Body>
                                        <Card.Title>Companies</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Button>
                        </a>
                        <a href='/admin/jobPosting'>
                            <Button bg='dark' variant="light">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/015/280/523/non_2x/job-logo-icon-with-tie-image-free-vector.jpg" />
                                    <Card.Body>
                                        <Card.Title>Job Posted</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Button>
                        </a>
                        <a href='/admin/students'>
                            <Button bg='dark' variant="light">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/010/398/242/small/star-student-academy-logo-concept-vector.jpg" />
                                    <Card.Body>
                                        <Card.Title>Students</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <br></br>
            <div className="container text-center">
                <div className="row justify-content-start">
                    <div className="d-flex justify-content-around">
                        <a href='/admin/studentapplied'>
                            <Button bg='dark' variant="light">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/resume-icon-vector-job-application-cv-sign-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-resume-icon-215388315.jpg" />
                                    <Card.Body>
                                        <Card.Title>Applicants</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Button>

                        </a>
                        <a href='/admin/placedStudent'>
                            <Button bg='dark' variant="light">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/01/38/23/38/360_F_138233891_TglN1sHLp63fI4j0NZ2I6rdtJiV0tmJD.jpg" height={290} />
                                    <Card.Body>
                                        <Card.Title>Placed Students</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Button>
                        </a>
                        <a href="/chat">
                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/005/337/802/original/icon-symbol-chat-outline-illustration-free-vector.jpg" />
                                <Card.Body>
                                    <Card.Title>Chat</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
                        </a>

                    </div>
                </div>
            </div>



            <br></br>
            <br></br>
            <br></br>

        </div>

    );
}

export default AdminHome;