import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Resume = () => {
    const location = useLocation();
    const { resumedata } = location.state;
    const [otherData, setOtherData] = useState(null);
    const usn = localStorage.getItem('token');
    const resumeRef = useRef(null);

    useEffect(() => {
        fetch(`http://localhost:1337/api/StudentProfile/${usn}`)
            .then((response) => response.json())
            .then((data) => {
                setOtherData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const createResume = () => {
        const createButton = document.getElementById('createButton');
        if (createButton) {
            createButton.style.display = 'none';
        }

        window.print();
    };

    return (
        <div>
            <div className="container text-center" ref={resumeRef}>
                {/* Resume content */}
                <h1 className="container text-center">{otherData?.firstName} {otherData?.lastName}</h1>
                {otherData && (
                    <h6 className="container text-center">
                        <ul>{otherData.email}</ul>
                        <ul>{resumedata.linkedinId}</ul>
                        <ul>{otherData.contactNumber}</ul>
                    </h6>
                )}
                {/* Rest of the resume */}
                <hr />
                <p align="justify">
                    {otherData?.careerPreferences}
                </p>
                
                <h3 className="container text-center">Skills</h3>
                <hr />
                <p align="justify"> {otherData?.keySkills}</p>
                
                <h3 className="container text-center">Education</h3>
                <hr />
                <p align="justify">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>School Name</th>
                                <th>Address</th>
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{otherData?.course3} {otherData?.specialization}</td>
                                <td>{otherData?.collegeName}</td>
                                <td>{otherData?.address3}</td>
                                <td>{otherData?.score3}</td>
                            </tr>
                            <tr>
                                <td>{otherData?.course2}</td>
                                <td>{otherData?.schoolName2}</td>
                                <td>{otherData?.address2}</td>
                                <td>{otherData?.score2}</td>
                            </tr>
                            <tr>
                                <td>{otherData?.course1}</td>
                                <td>{otherData?.schoolName1}</td>
                                <td>{otherData?.address1}</td>
                                <td>{otherData?.score1}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </p>
                
                <h3 className="container text-center">Projects</h3>
                <hr />
                <p align="justify">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Technology</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resumedata.projects?.map((posting) => (
                                <tr key={posting.name}>
                                    <td>{posting.name}</td>
                                    <td>{posting.technology}</td>
                                    <td>{posting.details}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </p>
                
                <h3 className="container text-center">Hobbies & Interests</h3>
                <hr />
                <p align="justify">
                    {resumedata.hobbies}
                </p>
                <br />
                <br />
                <br />
                <Button id="createButton" variant="dark" onClick={createResume}>
                    Create
                </Button>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};

export default Resume;
