import React, { Component ,useState} from 'react';
import { Navbar, Container, Nav, Form, Row, Col, Button,Dropdown } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'



const CompanyJobPosting = () => {
    const Name =localStorage.getItem('name')
    const userToken = localStorage.getItem('token')
    const companyEmail=userToken
    const [jobRole,setJobRole] = useState('');
    const [JobDescription,setJobDiscription] = useState('');
    const [Package,setPackage] = useState('');
    const [Qualification,setQualification] = useState('');
    const [Eligibility,setEligibility] = useState('');
    const [Specialization,setSpecialization] = useState('');
    const [Experience,setExperiance] = useState('');
    const [JobLocation,setJobLocation] = useState('');
    const [LastDate,setLastDate] = useState('');
    const [DriveFrom,setDriveFrom]= useState('');
    const [DriveTO,setDriveTo]= useState('');
    const [Venue,setVenue]= useState('');


    const navigate = useNavigate();
    async function newJobRole (e) {
        e.preventDefault()
        
        const response = await fetch('http://localhost:1337/api/newJobPosting', {
            method: 'POST',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify({
            companyEmail,jobRole,JobDescription,Package,Qualification,Eligibility,Specialization,Experience,JobLocation,LastDate,DriveFrom,DriveTO,Venue,Name
            }),
           
        })
    
        const data = await response.json();
    
        console.log(data)
        if(data.status === 'ok'){
            navigate('/CompanyHome', { replace: true })
        }
        else{
            console.log(data)
        }
    
    }
    



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
                            <Nav.Link href="CompanyHome">Home</Nav.Link>
                            <Nav.Link href="NewJobPosting">Job Posting</Nav.Link>
                            <Nav.Link href="CompanyInterview">Interviews</Nav.Link>
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
            <br></br>
            <br></br>

            <h1 className="container text-center">Job Posting</h1>
            <br></br>

            <div className="container ">

                <Form onSubmit={newJobRole}>
                    <Form.Group className="mb-3" controlId="JobRole">
                        <Form.Label>Job Role</Form.Label>
                        <Form.Control type="String" onChange={(e) =>{setJobRole(e.target.value)}} required placeholder="Job Role" />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="JobDescription">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control required as="textarea" onChange={(e) =>{setJobDiscription(e.target.value)}}rows={3} />
                    </Form.Group>
                    <br></br>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="Package">
                            <Form.Label>Package</Form.Label>
                            <Form.Control type="Strings" onChange={(e) =>{setPackage(e.target.value)}} required placeholder="Package" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="Qualification">
                            <Form.Label>Qualification</Form.Label>
                            <Form.Control type="String" onChange={(e) =>{setQualification(e.target.value)}}required placeholder="Qualification" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="Eligibility">
                            <Form.Label>Eligibility</Form.Label>
                            <Form.Control type="String" onChange={(e) =>{setEligibility(e.target.value)}} required placeholder="Eligibility" />
                        </Form.Group>
                    </Row>
                    <br></br>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="Specialization">
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control type="Strings"  onChange={(e) =>{setSpecialization(e.target.value)}} required placeholder="Specialization" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="Experiance">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control type="String" onChange={(e) =>{setExperiance(e.target.value)}} required placeholder="Experience" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="JobLocation">
                            <Form.Label>Job Location</Form.Label>
                            <Form.Control type="String" onChange={(e) =>{setJobLocation(e.target.value)}} required placeholder="Job Location" />
                        </Form.Group>
                    </Row>

                    <br></br>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="LastDate">
                            <Form.Label>Last Date</Form.Label>
                            <Form.Control type="date"  onChange={(e) =>{setLastDate(e.target.value)}} required placeholder="Last Date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="DriveDate">
                            <Form.Label>Drive From</Form.Label>
                            <Form.Control type="date" onChange={(e) =>{setDriveFrom(e.target.value)}} required placeholder="Drive Date" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="DriveDate">
                            <Form.Label>Drive To</Form.Label>
                            <Form.Control type="date"  onChange={(e) =>{setDriveTo(e.target.value)}} required placeholder="Drive Date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="Venue">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control type="String" onChange={(e) =>{setVenue(e.target.value)}} required placeholder="Venue" />
                        </Form.Group>
                    </Row>

                    <br></br>
                    <Button variant="dark" type="submit">Submit </Button>

                </Form>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
        </div>
    );
}

export default CompanyJobPosting;

