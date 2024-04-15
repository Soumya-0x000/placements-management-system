import React, { Component,useState,useEffect } from 'react';
import { Navbar, Container, Nav, Form, Row, Col, Button, Figure, Card, Table, Dropdown } from 'react-bootstrap';




const  AdminCompany = () => {
    const [postingData, setPostingData] = useState()
    useEffect(() => {
        console.log(localStorage.getItem('userid'))
        fetch('http://localhost:1337/api/getallcompany')
            .then((response) => {
                const reader = response.body.getReader();
                console.log(reader)
                reader.read().then(({ done, value }) => {
                    if (done) {
                        console.log('end...')
                        return;
                    }
                    const decoder = new TextDecoder();
                    const strData = decoder.decode(value)
                    const data = JSON.parse(strData)
                    console.log(data)
                    setPostingData(data)
                });
            })
    }, [])
    
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
                <br></br>
                <br></br>

                <h1 class="container text-center">Companies Registered</h1>
                <br></br>
                <div class="container ">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>WebSite Link</th>
                                <th>Email</th>

                            </tr>
                        </thead>
                        <tbody>
                        {postingData?.map((posting) =>
                            <tr>
                                <td>{posting.name}</td>
                                <td><a href={`http://${posting.website}`} target="_blank" rel="noopener noreferrer">{posting.website}</a></td>
                                <td type="email">{posting.email}</td>
                                
                            </tr>
                        )}   
                        </tbody>
                    </Table>
                </div>

            </div>
       );
    }
     
    export default AdminCompany;
