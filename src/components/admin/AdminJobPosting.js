import React, { Component ,useState,useEffect} from 'react';
import { Navbar, Container, Nav, Form, Button, Card, Figure, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const AdminJobPosting = () => {
    const [postingData, setPostingData] = useState()

    const navigate = useNavigate();


    const handleClick = (e,posting) => {
        e.preventDefault()
        // console.log(posting)
        navigate('/admin/jobDetails', { state: { postingData: posting } });
    }

    useEffect(() => {
        console.log(localStorage.getItem('userid'))
        fetch('http://localhost:1337/api/getadminposting')
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
                <div class="container ">
                <br></br>
                <h1 class="container text-center">Jobs Posted</h1>
                <br></br>
                <br></br>
                    <div class="row justify-content-start">
                        <div className="d-flex justify-content-around">
                        {postingData?.map((posting) =>
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/computer-network-logo-design-monitor-display-concept-sign-hardware-software-icon-modern-electronic-technology-symbol-computer-172576719.jpg" />
                                <Card.Body>
                                    <Card.Title>{posting.Name}</Card.Title>
                                    <Card.Text>
                                        Job Role: {posting.jobRole}
                                        <br></br>
                                        CTC: {posting.Package}
                                        <br></br>
                                        Specialization: {posting.Specialization}
                                        <br></br>
                                        Last Date: {posting.LastDate}
                                        <br></br>
                                    </Card.Text>
                                    {/* <a href='/admin/jobDetails'> */}
                                    <Button variant="dark" onClick={(e) => handleClick(e,posting)} >View</Button>
                                    {/* </a> */}
                                </Card.Body>
                            </Card>

)}
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
               
                <br></br>
                <br></br>
                <br></br>

            </div>
       );
    }
     
    export default AdminJobPosting;
