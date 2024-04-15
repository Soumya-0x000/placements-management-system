import React, { useState } from 'react';
import { Form, Row, Col, Button,Dropdown,Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StudentCoverLetter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    phno: '',
    linkedIn: '',
    email: '',
    address: '',
    toName: '',
    designation: '',
    companyName: '',
    companyAddress: '',
    letterContent: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the /CoverLetter page
    navigate('/CoverLetter', { state: {data:formData} });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
                            <Nav.Link href="/StudentHome">Home</Nav.Link>
                            <Nav.Link href="/StudentSchedule">Schedule</Nav.Link>
                            <Nav.Link href="/createResume">Resume</Nav.Link>
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
    <Form onSubmit={handleSubmit}>
      <br />
      <h1 className="container text-center">Cover Letter</h1>
      <br />

      <div className="container">
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="formGridName" className="position-relative">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="formGridBranch">
            <Form.Label>Branch</Form.Label>
            <Form.Control type="text" name="branch" placeholder="Branch" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhno">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phno" placeholder="Phno" required onChange={handleChange} />
          </Form.Group>
        </Row>
        <br />

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLinkedIn">
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control type="text" name="linkedIn" placeholder="LinkedIn" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" placeholder="Address" required onChange={handleChange} />
          </Form.Group>
        </Row>
        <br />

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridToName">
            <Form.Label>Letter is To</Form.Label>
            <Form.Control type="text" name="toName" placeholder="Name" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDesignation">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" name="designation" placeholder="Designation" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" name="companyName" placeholder="Company Name" required onChange={handleChange} />
          </Form.Group>
        </Row>

        <br />

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCompanyAddress">
            <Form.Label>Company Address</Form.Label>
            <Form.Control type="text" name="companyAddress" placeholder="Company Address" required onChange={handleChange} />
          </Form.Group>
        </Row>

        <br />

        <Row className="mb-3">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Letter Content</Form.Label>
            <Form.Control as="textarea" name="letterContent" required rows={10} onChange={handleChange} />
          </Form.Group>
        </Row>

        <br />

        <br />
        <Button variant="dark" type="submit">
          Submit
        </Button>{' '}
        <Button variant="dark" type="reset">
          Cancel
        </Button>
        <br />
        <br />
        <br />
      </div>
    </Form>
    </div>
  );
};

export default StudentCoverLetter;
