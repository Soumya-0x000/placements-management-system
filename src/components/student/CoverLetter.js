import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

const CoverLetter = () => {
    const location = useLocation();
    const { data } = location.state;
    
    const createLetter = () => {
        const createButton = document.getElementById('createButton');
        if (createButton) {
            createButton.style.display = 'none';
        }

        window.print();
    };

    return (
        <div>

            <div className="container text-justify" align="justify" >
                <br></br>
                <br></br>
                <h1 class="container text-left">{data.name}</h1>
                <h6 class="container text-left"  ><h5>{data.branch}</h5>{data.email}<br></br>{data.linkedIn}<br></br>{data.phno}<br></br>{data.address}</h6>

                <br></br>

                <h6 class="containet text-left"><b>{data.toName}</b>
                    <br></br>
                    {data.designation}
                    <br></br>
                    <br></br>
                    {data.companyName}
                    <br></br>
                    {data.companyAddress}
                    <br></br>
                    <br></br>
                    Dear {data.toName},
                    <br></br>
                    {data.letterContent}
                    <br></br>
                    <br></br>
                    kind regards,
                    <br></br>
                    {data.name}
                </h6>
                <br></br>
                <br></br>

                
                <Button id="createButton" variant="dark" onClick={createLetter}>
                    Download
                </Button>



                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default CoverLetter;
