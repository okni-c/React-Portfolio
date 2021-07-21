import React from 'react';
import Nav from '../Nav';

function Header() {

    return (
        <>
            <nav class="classy-navbar" id="richNav">

                <a class="nav-brand" href="/">Kevin Dallas Yatsinko</a>

                <div class="classy-navbar-toggler">
                    <span class="navbarToggler"><span></span><span></span><span></span></span>
                </div>

                <div class="classy-menu">
                    <Nav />
                </div>
            </nav>
        </>
    );
}

export default Header;