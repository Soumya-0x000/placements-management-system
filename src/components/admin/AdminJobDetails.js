import React, { Component ,useState,useEffect} from 'react';
import { Navbar, Container, Nav, Form, Button ,Dropdown } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
const AdminJobDetails = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { postingData } = location.state;
    const jobid = postingData._id;

    const handleApply = async (e) => {

        e.preventDefault();
        try {
            const response = await fetch('http://localhost:1337/api/changeJobStatus', {
              method: 'POST',
              headers: {
               
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ jobId: jobid, status: 'accepted' }),
            });
      
            if (response.ok) {
                alert('Job Applied Successfully');
              console.log('Job status changed successfully.');
            } else {
              // Handle error response, e.g., show an error message
              console.error('Failed to change job status.');
            }
          } catch (error) {
            // Handle network error
            console.error('Network error:', error);
          }
      };

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

            <div className="container text-center">
                <br />
                <br />
                <h1 className="container text-center">{postingData.name}</h1>
                <br />
                <br />
                <h5 className="container text-justify" align="justify">
                    <img
                        align="right"
                        src="https://thumbs.dreamstime.com/b/computer-network-logo-design-monitor-display-concept-sign-hardware-software-icon-modern-electronic-technology-symbol-computer-172576719.jpg"
                        height="180"
                        width="171"
                    />
                    <b>Job Role:</b> {postingData.jobRole}
                    <br />
                    <br />
                    <b>Package:</b> {postingData.Package}
                    <br />
                    <br />
                    <b>Qualification:</b> {postingData.Qualification}
                    <br />
                    <br />
                    <b>Eligibility:</b> {postingData.Eligibility}
                    <br />
                    <br />
                    <b>Specialization:</b>
                    {postingData.Specialization}
                    <br />
                    <br />
                    <b>Experience:</b> {postingData.Experiance}
                    <br />
                    <br />
                    <b>Location:</b> {postingData.JobLocation}
                    <br />
                    <br />
                    <b>Drive Date:</b> 26/04/23,27/04/23,28/04/23,29/04/23
                    <br />
                    <br />
                    <b>Job Description:</b>
                    <br />
                    <br />
                    {postingData.JobDescription}
                    <br />
                    <br />

                    
                        <Button variant="dark" onClick={handleApply}>
                            Accept
                        </Button>
                    
                </h5>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

export default AdminJobDetails;
