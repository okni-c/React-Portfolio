import React from 'react';
import Navi from '../Nav';

function Header(props) {

    const {
        isHero,
        setHero,
        isAboutMe,
        setAboutMe,
        isProject,
        setProject,
        isResume,
        setResume,
        isContact,
        setContact
    } = props;

    return (
        <>
            <nav class="classy-navbar" id="richNav">

                <a class="nav-brand" href="/">Kevin Dallas Yatsinko</a>

                <div class="classy-navbar-toggler">
                    <span class="navbarToggler"><span></span><span></span><span></span></span>
                </div>

                <div class="classy-menu">
                    <Navi
                        isHero={isHero}
                        setHero={setHero}
                        isAboutMe={isAboutMe}
                        setAboutMe={setAboutMe}
                        isProject={isProject}
                        setProject={setProject}
                        isResume={isResume}
                        setResume={setResume}
                        isContact={isContact}
                        setContact={setContact} />
                </div>
            </nav>
        </>
    );
}

export default Header;