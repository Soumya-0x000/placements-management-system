import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button, Table, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const AdminStudentsApplied = () => {
    const [postingData, setPostingData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:1337/api/appliedcandidatesadmin')
            .then((response) => response.json())
            .then((data) => setPostingData(data));
    }, []);

    const handleDelete = (appliedid) => {
        console.log("HIII")
        // Make API call to delete the record with the specified appliedid
        fetch(`http://localhost:1337/api/deleteCandidate/${appliedid}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                // Update the postingData state after successful deletion
                if (data.success) {
                    const updatedPostingData = postingData.filter((posting) => posting.appliedid !== appliedid);
                    setPostingData(updatedPostingData);
                }
            })
            .catch((error) => console.log(error));
    };
    const openResume = (usn) => {
        navigate('/StudentResume', { state: { usn: usn } })
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
            <br />
            <br />
            <h1 className="container text-center">Students Applied</h1>
            <br />
            <br />
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Student Name</th>
                            <th>Email</th>
                            <th>USN</th>
                            <th>Job Role</th>
                            <th>Company Name</th>
                            <th>Job Id</th>
                            <th>Status</th>
                            <th>Resume</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {postingData?.map((posting) => (
                            <tr key={posting.appliedid}>
                                {/* Table body cells */}
                                <td>{posting.appliedid}</td>
                                <td>{posting.studentName}</td>
                                <td type="email">{posting.studentEmail}</td>
                                <td>{posting.usn}</td>
                                <td>{posting.jobRole}</td>
                                <td>{posting.companyName}</td>
                                <td>{posting.jobId}</td>
                                <td>{posting.status}</td>
                                <td>
                                    <button onClick={() => openResume(posting.usn)}>Resume</button>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={() => handleDelete(posting.appliedid)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AdminStudentsApplied;
