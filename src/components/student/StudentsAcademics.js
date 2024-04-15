import React from 'react';
import { Navbar, Container, Nav, Form, Button, Card, Figure, Dropdown } from 'react-bootstrap'

const CourseTable = () => {
    
    const data = [
        {
            department: 'Computer Science',
            semesters: [
                {
                    semester: 1,
                    courses: [
                        { course: 'Introduction to Programming', job: 'Software Developer', difficulty: 'high' },
                        { course: 'Data Structures', job: 'Software Engineer', difficulty: 'high' },
                        { course: 'Database Management Systems', job: 'Database Administrator', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 2,
                    courses: [
                        { course: 'Algorithms', job: 'Algorithm Engineer', difficulty: 'high' },
                        { course: 'Web Development', job: 'Front-end Developer', difficulty: 'medium' },
                        { course: 'Operating Systems', job: 'Systems Administrator', difficulty: 'high' },
                    ],
                },
                {
                    semester: 3,
                    courses: [
                        { course: 'Computer Networks', job: 'Network Engineer', difficulty: 'high' },
                        { course: 'Software Engineering', job: 'Software Engineer', difficulty: 'medium' },
                        { course: 'Artificial Intelligence', job: 'AI Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 4,
                    courses: [
                        { course: 'Database Systems', job: 'Database Administrator', difficulty: 'medium' },
                        { course: 'Mobile App Development', job: 'Mobile App Developer', difficulty: 'medium' },
                        { course: 'Computer Architecture', job: 'Hardware Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 5,
                    courses: [
                        { course: 'Operating Systems Internals', job: 'Systems Engineer', difficulty: 'high' },
                        { course: 'Software Testing', job: 'Quality Assurance Engineer', difficulty: 'medium' },
                        { course: 'Data Science', job: 'Data Scientist', difficulty: 'high' },
                    ],
                },
                {
                    semester: 6,
                    courses: [
                        { course: 'Web Technologies', job: 'Web Developer', difficulty: 'medium' },
                        { course: 'Machine Learning', job: 'Machine Learning Engineer', difficulty: 'high' },
                        { course: 'Cloud Computing', job: 'Cloud Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 7,
                    courses: [
                        { course: 'Network Security', job: 'Security Engineer', difficulty: 'high' },
                        { course: 'Software Project Management', job: 'Project Manager', difficulty: 'medium' },
                        { course: 'Computer Graphics', job: 'Graphics Programmer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 8,
                    courses: [
                        { course: 'Big Data Analytics', job: 'Big Data Engineer', difficulty: 'high' },
                        { course: 'Cybersecurity', job: 'Cybersecurity Analyst', difficulty: 'high' },
                        { course: 'Natural Language Processing', job: 'NLP Engineer', difficulty: 'high' },
                    ],
                },
            ],
        }, {
            department: 'Electrical Engineering',
            semesters: [
                {
                    semester: 1,
                    courses: [
                        { course: 'Introduction to Electrical Engineering', job: 'Electrical Engineer', difficulty: 'medium' },
                        { course: 'Circuit Analysis', job: 'Circuit Design Engineer', difficulty: 'high' },
                        { course: 'Digital Logic Design', job: 'Digital Design Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 2,
                    courses: [
                        { course: 'Electromagnetic Theory', job: 'Electromagnetic Engineer', difficulty: 'high' },
                        { course: 'Power Systems', job: 'Power Systems Engineer', difficulty: 'high' },
                        { course: 'Electronic Devices and Circuits', job: 'Electronic Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 3,
                    courses: [
                        { course: 'Control Systems', job: 'Control Systems Engineer', difficulty: 'medium' },
                        { course: 'Power Electronics', job: 'Power Electronics Engineer', difficulty: 'high' },
                        { course: 'Digital Signal Processing', job: 'DSP Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 4,
                    courses: [
                        { course: 'Microprocessors and Microcontrollers', job: 'Embedded Systems Engineer', difficulty: 'medium' },
                        { course: 'Renewable Energy Systems', job: 'Renewable Energy Engineer', difficulty: 'high' },
                        { course: 'Communication Systems', job: 'Communication Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 5,
                    courses: [
                        { course: 'VLSI Design', job: 'VLSI Engineer', difficulty: 'high' },
                        { course: 'Electrical Machine Design', job: 'Machine Design Engineer', difficulty: 'medium' },
                        { course: 'Power System Protection', job: 'Protection Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 6,
                    courses: [
                        { course: 'High Voltage Engineering', job: 'High Voltage Engineer', difficulty: 'high' },
                        { course: 'Digital Communication', job: 'Digital Communication Engineer', difficulty: 'medium' },
                        { course: 'Industrial Automation', job: 'Automation Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 7,
                    courses: [
                        { course: 'Optimization Techniques', job: 'Optimization Engineer', difficulty: 'medium' },
                        { course: 'Power System Analysis', job: 'Power System Analyst', difficulty: 'high' },
                        { course: 'Embedded Systems', job: 'Embedded Systems Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 8,
                    courses: [
                        { course: 'Smart Grids', job: 'Smart Grid Engineer', difficulty: 'high' },
                        { course: 'Artificial Intelligence in Power Systems', job: 'AI Engineer', difficulty: 'high' },
                        { course: 'Project Management', job: 'Project Manager', difficulty: 'medium' },
                    ],
                },
            ],
        },
        {
            department: 'Electronics Engineering',
            semesters: [
                {
                    semester: 1,
                    courses: [
                        { course: 'Electronic Devices', job: 'Electronics Engineer', difficulty: 'medium' },
                        { course: 'Analog Circuit Design', job: 'Analog Design Engineer', difficulty: 'high' },
                        { course: 'Digital System Design', job: 'Digital System Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 2,
                    courses: [
                        { course: 'Signals and Systems', job: 'Signal Processing Engineer', difficulty: 'medium' },
                        { course: 'Microprocessors and Interfacing', job: 'Embedded Systems Engineer', difficulty: 'high' },
                        { course: 'Electronic Circuits', job: 'Electronic Circuits Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 3,
                    courses: [
                        { course: 'Digital Signal Processing', job: 'DSP Engineer', difficulty: 'high' },
                        { course: 'Communication Systems', job: 'Communication Engineer', difficulty: 'high' },
                        { course: 'VLSI Design', job: 'VLSI Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 4,
                    courses: [
                        { course: 'Embedded Systems', job: 'Embedded Systems Engineer', difficulty: 'medium' },
                        { course: 'Power Electronics', job: 'Power Electronics Engineer', difficulty: 'high' },
                        { course: 'Control Systems', job: 'Control Systems Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 5,
                    courses: [
                        { course: 'Microwave Engineering', job: 'Microwave Engineer', difficulty: 'high' },
                        { course: 'Optoelectronics', job: 'Optoelectronics Engineer', difficulty: 'medium' },
                        { course: 'Digital Image Processing', job: 'Image Processing Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 6,
                    courses: [
                        { course: 'Wireless Communication', job: 'Wireless Communication Engineer', difficulty: 'high' },
                        { course: 'Robotics and Automation', job: 'Robotics Engineer', difficulty: 'medium' },
                        { course: 'Digital VLSI Design', job: 'Digital VLSI Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 7,
                    courses: [
                        { course: 'Network Analysis and Synthesis', job: 'Network Engineer', difficulty: 'medium' },
                        { course: 'Antenna and Wave Propagation', job: 'Antenna Engineer', difficulty: 'high' },
                        { course: 'FPGA-based System Design', job: 'FPGA Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 8,
                    courses: [
                        { course: 'Embedded System Design', job: 'Embedded Systems Engineer', difficulty: 'medium' },
                        { course: 'VLSI Testing and Verification', job: 'VLSI Testing Engineer', difficulty: 'high' },
                        { course: 'Project Management', job: 'Project Manager', difficulty: 'medium' },
                    ],
                },
            ],
        },
        {
            department: 'Civil Engineering',
            semesters: [
                {
                    semester: 1,
                    courses: [
                        { course: 'Engineering Mechanics', job: 'Civil Engineer', difficulty: 'medium' },
                        { course: 'Building Materials and Construction', job: 'Construction Engineer', difficulty: 'high' },
                        { course: 'Surveying', job: 'Survey Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 2,
                    courses: [
                        { course: 'Strength of Materials', job: 'Structural Engineer', difficulty: 'high' },
                        { course: 'Concrete Technology', job: 'Concrete Technologist', difficulty: 'medium' },
                        { course: 'Geotechnical Engineering', job: 'Geotechnical Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 3,
                    courses: [
                        { course: 'Fluid Mechanics', job: 'Fluid Engineer', difficulty: 'medium' },
                        { course: 'Structural Analysis', job: 'Structural Analyst', difficulty: 'high' },
                        { course: 'Transportation Engineering', job: 'Transportation Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 4,
                    courses: [
                        { course: 'Design of Concrete Structures', job: 'Concrete Design Engineer', difficulty: 'high' },
                        { course: 'Environmental Engineering', job: 'Environmental Engineer', difficulty: 'medium' },
                        { course: 'Surveying-II', job: 'Survey Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 5,
                    courses: [
                        { course: 'Geotechnical Engineering', job: 'Geotechnical Engineer', difficulty: 'medium' },
                        { course: 'Design of Steel Structures', job: 'Structural Engineer', difficulty: 'high' },
                        { course: 'Hydraulic Structures', job: 'Hydraulic Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 6,
                    courses: [
                        { course: 'Construction Management', job: 'Construction Manager', difficulty: 'medium' },
                        { course: 'Town Planning', job: 'Town Planner', difficulty: 'medium' },
                        { course: 'Project Estimation and Costing', job: 'Cost Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 7,
                    courses: [
                        { course: 'Structural Dynamics', job: 'Structural Dynamics Engineer', difficulty: 'high' },
                        { course: 'Transportation Planning and Management', job: 'Transportation Planner', difficulty: 'high' },
                        { course: 'Finite Element Analysis', job: 'FEA Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 8,
                    courses: [
                        { course: 'Construction Technology', job: 'Construction Technologist', difficulty: 'medium' },
                        { course: 'Project Planning and Control', job: 'Project Planner', difficulty: 'medium' },
                        { course: 'Project Management', job: 'Project Manager', difficulty: 'medium' },
                    ],
                },
            ],
        },

        {
            department: 'Mechanical Engineering',
            semesters: [
                {
                    semester: 1,
                    courses: [
                        { course: 'Engineering Mechanics', job: 'Mechanical Engineer', difficulty: 'high' },
                        { course: 'Thermodynamics', job: 'Thermal Engineer', difficulty: 'high' },
                        { course: 'Machine Design', job: 'Design Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 2,
                    courses: [
                        { course: 'Fluid Mechanics', job: 'Fluid Engineer', difficulty: 'medium' },
                        { course: 'Heat Transfer', job: 'Heat Transfer Engineer', difficulty: 'high' },
                        { course: 'Control Systems', job: 'Control Systems Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 3,
                    courses: [
                        { course: 'Engineering Materials', job: 'Materials Engineer', difficulty: 'medium' },
                        { course: 'Manufacturing Processes', job: 'Manufacturing Engineer', difficulty: 'medium' },
                        { course: 'CAD/CAM', job: 'CAD/CAM Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 4,
                    courses: [
                        { course: 'Machine Tools', job: 'Machine Tool Engineer', difficulty: 'medium' },
                        { course: 'Refrigeration and Air Conditioning', job: 'HVAC Engineer', difficulty: 'high' },
                        { course: 'Automotive Engineering', job: 'Automotive Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 5,
                    courses: [
                        { course: 'Robotics and Automation', job: 'Robotics Engineer', difficulty: 'high' },
                        { course: 'Power Plant Engineering', job: 'Power Plant Engineer', difficulty: 'high' },
                        { course: 'Finite Element Analysis', job: 'FEA Engineer', difficulty: 'high' },
                    ],
                },
                {
                    semester: 6,
                    courses: [
                        { course: 'Advanced Manufacturing', job: 'Advanced Manufacturing Engineer', difficulty: 'medium' },
                        { course: 'Industrial Engineering', job: 'Industrial Engineer', difficulty: 'medium' },
                        { course: 'Engineering Economics', job: 'Engineering Economist', difficulty: 'low' },
                    ],
                },
                {
                    semester: 7,
                    courses: [
                        { course: 'Mechanical Vibrations', job: 'Vibration Analyst', difficulty: 'high' },
                        { course: 'Composite Materials', job: 'Composite Engineer', difficulty: 'high' },
                        { course: 'Quality Control', job: 'Quality Control Engineer', difficulty: 'medium' },
                    ],
                },
                {
                    semester: 8,
                    courses: [
                        { course: 'Renewable Energy Systems', job: 'Renewable Energy Engineer', difficulty: 'high' },
                        { course: 'Industrial Safety', job: 'Safety Engineer', difficulty: 'medium' },
                        { course: 'Project Management', job: 'Project Manager', difficulty: 'medium' },
                    ],
                },
            ],
        },
        // Add more departments as needed
    ];

    const tableStyle = {
        margin: '0 auto',
        borderCollapse: 'collapse',
        textAlign: 'center',
    };

    const cellStyle = {
        padding: '10px',
        border: '1px solid #ddd',
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
            <br></br>
            <br></br>
        <div>
            {data.map((department) => (
                <div key={department.department}>
                    <br></br>
                    <h3>{department.department}</h3>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={cellStyle}>Semester</th>
                                <th style={cellStyle}>Course</th>
                                <th style={cellStyle}>Job Opportunity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {department.semesters.map((semester) =>
                                semester.courses.map((course, index) => (
                                    <tr key={index}>
                                        {index === 0 && (
                                            <td style={{ ...cellStyle, verticalAlign: 'middle' }} rowSpan={semester.courses.length}>
                                                {semester.semester}
                                            </td>
                                        )}
                                        <td style={cellStyle}>{course.course}</td>
                                        <td style={cellStyle}>{course.job}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    <br></br>
                </div>
                
            ))}
        </div>
        </div>
    );
};

export default CourseTable;
