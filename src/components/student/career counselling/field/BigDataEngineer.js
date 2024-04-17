import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button,Dropdown } from 'react-bootstrap'

const BigDataEngineer = () => {
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
                <h1 class="container text-center">Big Data Engineer</h1>

                <br></br>
                <h5 class="container text-justify" align="justify">
                    The job profile of a Big Data Engineer is one of the most demanding roles nowadays. Their value is so high for any company across all sectors and also they get high salaries for offering their skills and talent.
                    <br></br>
                    <br></br>
                    Big Data is an ever-growing sector. It is gaining popularity with its potential application in many organizations. Thus, a career in the field is one of the perfect choices for one who is looking for a long and stable career with high rewards.
                    <br></br>
                    <br></br>
                    Education and specific skills are a requirement to land a job in this field. Big data positions require a background in programming, fluency, or familiarity in C, Python, Java, and SQL. The best way to acquire these skills is by getting a bachelor’s or master’s degree.
                    <br></br>
                    <br></br>
                    As data continues to grow and expand, cloud space providers like Microsoft Azure Google Cloud, AWS and are going to rule in storing big data. This will increase room for scalability and efficiency for companies. This also means there will be more and more candidate hired to manage these data, which translate to more job opportunities for “Big Data Engineers” to handle the database and huge amount of data of a company.,
                    <br></br>
                    <br></br>

                    Looking at stats it can be determined that organizations are adopting this new technology and in the future, Big Data is going to be one of the best technologies.
                    <br></br>
                    <br></br>
                    Because of Big Data, the industry is transforming to the next level. But, data is of no use unless there’s someone to analyze it and unravel the hidden patterns inside it. Businesses want insights from Big Data, and that is why they’re always looking for skilled professionals in this sector – candidates who can unlock the secrets that Big Data analytics holds.
                    <br></br>
                    <br></br>

                    Technologies in Big Data analytics like Spark and Hadoop are the buzzwords now. So, be sure to learn how to work with related tools like HBase, MapReduce, SparkSQL, GraphX, Spark RDD, Spark Streaming, SparkR, MLlib, Flume, Sqoop, Oozie, Kafka, Data frames, Hive, and many more.
                    <br></br>
                    <br></br>

                    Rest assured, if you learn to gather the correct skills, you will become an important asset to any organization invested in Big Data Analytics. You will grow with the company.
                </h5>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default BigDataEngineer;
