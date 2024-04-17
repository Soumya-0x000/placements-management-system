import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button,Dropdown  } from 'react-bootstrap'

const AerospaceEngineer = () => {
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
                <h1 class="container text-center">Aerospace Engineer</h1>

                <br></br>
                <h5 class="container text-justify" align="justify">
                    India is still in its infancy when it comes to aerospace engineering, despite the recent rise in the popularity of AI and ML. However, flight technology is being used more and more by industries to boost productivity, efficiency, and cost. India is experiencing accelerated expansion in the aerospace engineering sector.
                    <br></br>
                    <br></br>
                    More engineers, operators, and technicians will be needed in aerospace engineering as a result of Industry 4.0. Students enrolled in Aerospace Engineering courses have the chance to work in a variety of fields, such as aircraft research and development (R&D), as well as handling rockets and rocket launchers, which require maintenance, monitoring, and quality control.
                    <br></br>
                    <br></br>
                    Candidates who pursue an engineering degree in aerospace in India can pursue careers as thermal design engineers, mechanical design engineers, assistant technical officers, or aircraft production managers. These are some main sectors of aerospace engineering that Indian students can consider working in :
                    <br></br>
                    <br></br>
                    <ul>
                        <li><b>Research Labs:</b> Aerospace engineers working in government research labs have the responsibility of conducting laser and other diagnostic techniques-based propulsion research studies. Defense Research and Development Organization (DRDO), National Aerospace Laboratories (NAL), Hindustan Aeronautics Limited (HAL), Indian Space Research Organization (ISRO), Gas Turbine Research Establishment (GTRE) etc., are some of the major laboratories that contain work possibility for Aerospace Engineers in India.</li>
                        <li><b>Defence Services:</b> Aircraft and Aviation are major parts of Defense Services in India. A number of noteworthy accomplishments that have had a favourable influence on many fields of endeavours have been made possible by the constantly evolving requirements of civil and military aircraft, and modern fighting techniques. Aerospace Engineers can get high-paying jobs in this.</li>
                        <li><b>Commercial Airlines:</b> Aerospace Engineers are almost a necessity for any successful commercial airline, in case of emergencies. An airline’s aeronautical engineer is responsible for ensuring that the company conforms with legal requirements, that specifications for new equipment are satisfied, and that OEMs are informed of any new or evolving requirements.</li>
                        <li><b>Private Industries:</b> There are numerous general non-specific businesses that hire aerospace engineers. General Electric, Boeing, Airbus, Pratt & Whitney, TATA Aerospace & Defense, QuEST Global, Mahindra Aerospace, Taneja Aerospace etc. are some examples of companies that recruit aerospace engineers.</li>
                        <li><b>Airport Design and Administration:</b> Given that all airports have to be designed keeping in mind the designs of the aircraft, aerospace engineers have an important role in airport design. This job requires a licensed expert in the field.</li>
                        <li><b>Aeronautical Development Agency:</b> Aeronautical Development Agency (ADA) is a Society under the Department of Defense Research and Development, Ministry of Defense, Government of India. ADA is a major employer of aeronautical engineers in India. Their job is to carry out research in aeronautical science, design, and development of various types of aircraft and rotorcraft, and to assist, promote, direct, manage, coordinate, and carry out that research.</li>
                        <li><b>Drone Design:</b> Anything that can fly, including drones, aircraft, and helicopters, is designed and built by aerospace engineers. Because aerospace engineer has been trained to design, manufacture, analyse, and test equipment capable of flight, including drones, their expertise is required during the design and development of drones.</li>
                        <li><b>Directorate General of Civil Aviation:</b> The Directorate General of Civil Aviation (DGCA) is a statutory body of the Government of India to regulate civil aviation in India. The DGCA is in charge of maintaining all aviation regulations, conducting investigations into aviation accidents and events, and issuing aviation licences.</li>
                    </ul>
                </h5>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default AerospaceEngineer;
