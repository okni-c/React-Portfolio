import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navi(props) {
    const {
        setHero,
        setAboutMe,
        setProject,
        setResume,
        setContact
    } = props;

    return (
        <>
            <div class="classynav">
                <Nav defaultActiveKey="hero" className="classynav">
                    <ul>
                        <li><Nav.Link eventKey="aboutme" onClick={() => {
                            setHero(false);
                            setAboutMe(true);
                            setProject(false);
                            setResume(false);
                            setContact(false);
                        }}><a>About Me</a></Nav.Link></li>
                        <li><Nav.Link eventKey="project" onClick={() => {
                            setHero(false);
                            setAboutMe(false);
                            setProject(true);
                            setResume(false);
                            setContact(false);
                        }}><a>Projects</a></Nav.Link></li>
                        <li><Nav.Link eventKey="resume" onClick={() => {
                            setHero(false);
                            setAboutMe(false);
                            setProject(false);
                            setResume(true);
                            setContact(false);
                        }}><a>Resume</a></Nav.Link></li>
                        <li><Nav.Link eventKey="contact" onClick={() => {
                            setHero(false);
                            setAboutMe(false);
                            setProject(false);
                            setResume(false);
                            setContact(true);
                        }}><a>Contact</a></Nav.Link></li>
                    </ul>
                </Nav>
            </div>
        </>
    );
}

export default Navi;