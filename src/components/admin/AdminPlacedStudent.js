import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Table, Dropdown,Button } from 'react-bootstrap';

const AdminPlacedStudent = () => {
  const [postingData, setPostingData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/appliedcandidatesadmin')
      .then((response) => response.json())
      .then((data) => {
        const acceptedStudents = data.filter((posting) => posting.status === 'accepted');
        setPostingData(acceptedStudents);
      })
      .catch((error) => console.log(error));
  }, []);

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

      <br />
      <br />

      <h1 className="container text-center">Placed Students</h1>
      <br />
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Job Role</th>
              <th>Student Name</th>
              <th>USN</th>
              <th>CTC</th>
              <th>Company Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {postingData.map((posting) => (
              <tr key={posting.appliedid}>
                <td>{posting.jobId}</td>
                <td>{posting.jobRole}</td>
                <td>{posting.studentName}</td>
                <td>{posting.usn}</td>
                <td>{posting.ctc}</td>
                <td>{posting.companyName}</td>
                <td>{posting.studentEmail}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPlacedStudent;
