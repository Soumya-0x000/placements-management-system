import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button, Dropdown } from 'react-bootstrap';

const StudentProfile = () => {
  const [studentData, setStudentData] = useState({});
  const usn = localStorage.getItem('token');
  console.log(usn);

  useEffect(() => {
    fetch(`http://localhost:1337/api/studentProfile/${usn}`)
      .then(response => response.json())
      .then(data => {
        setStudentData(data);
      })
      .catch(err => {
        console.log(err);
      });
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
                        <Button variant="outline-dark">
                         <Dropdown className="me-auto my-1 my-lg-0">
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-Login">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>

                        </Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

      <div className="container text-center">
        <br />
        <br />
        <h1 className="container text-center">My Profile</h1>
        <br />
        <h5 className="container text-justify" align="Justify">
          <img
            align="right"
            src="https://img.freepik.com/free-icon/user-profile-icon_318-33925.jpg?w=2000"
            height="180"
            width="171"
          />

          <b>NAME:</b> {studentData.firstName} {studentData.lastName}
          <br />
          <br />
          <b>USN:</b> {studentData.usn}
          <br />
          <br />
          <b>SEMESTER:</b> {studentData.currentSemester}
          <br />
          <br />
          <b>EMAIL:</b> {studentData.email}
          <br />
          <br />
          <b>DATE OF BIRTH:</b> {studentData.dateOfBirth}
          <br />
          <br />
          <b>COUNTRY:</b> {studentData.country}
          <br />
          <br />
          <b>STATE:</b> {studentData.state}
          <br />
          <br />
          <b>CITY:</b> {studentData.city}
          <br />
          <br />
          <b>ZIP:</b> {studentData.zip}
          <br />
          <br />
          <b>CONTACT NUMBER:</b> {studentData.contactNumber}
          <br />
          <br />
          <b>ADDRESS:</b> {studentData.address}
          <br />
          <br />
          <b>CAREER OBJECTIVE:</b> {studentData.careerObjective}
          <br />
          <br />
          <br />
          <b>SCHOOL NAME:</b> {studentData.schoolName1}
          <br />
          <br />
          <b>EDUCATION:</b> {studentData.education1}
          <br />
          <br />
          <b>COURSE:</b> {studentData.course1}
          <br />
          <br />
          <b>ADDRESS:</b> {studentData.address1}
          <br />
          <br />
          <b>SCORE:</b> {studentData.score1}
          <br />
          <br />
          <b>YEAR OF COMPLETION:</b> {studentData.yearOfCompletion1}
          <br />
          <br />
          <br />
          <b>COLLEGE NAME:</b> {studentData.schoolName2}
          <br />
          <br />
          <b>EDUCATION:</b> {studentData.education2}
          <br />
          <br />
          <b>COURSE:</b> {studentData.course2}
          <br />
          <br />
          <b>ADDRESS:</b> {studentData.address2}
          <br />
          <br />
          <b>SCORE:</b> {studentData.score2}
          <br />
          <br />
          <b>YEAR OF COMPLETION:</b> {studentData.yearOfCompletion2}
          <br />
          <br />
          <br />
          <b>COLLEGE NAME:</b> {studentData.collegeName}
          <br />
          <br />
          <b>COURSE:</b> {studentData.education3}
          <br />
          <br />
          <b>SPECIFICATION:</b> {studentData.course3}
          <br />
          <br />
          <b>ADDRESS:</b> {studentData.address3}
          <br />
          <br />
          <b>SCORE:</b> {studentData.score3}
          <br />
          <br />
          <b>YEAR OF COMPLETION:</b> {studentData.courseDuration}
          <br />
          <br />
          <br />
          <b>KEY SKILLS:</b> {studentData.keySkills}
          <br />
          <br />
          <b>CAREER PREFERENCES:</b> {studentData.careerPreferences}
          <br />
          <br />
          <br />
          <a href="/EditStudentProfile">
            <Button variant="dark" type="submit">
              Edit Profile
            </Button>
          </a>
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default StudentProfile;
