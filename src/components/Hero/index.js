import React from 'react';

function Hero(props) {
    const {
        setHero,
        setProject
    } = props;

    return (
        <>
            <section class="welcome_area bg-img background-overlay" style={{ backgroundImage: 'url(assets/img/bg-img/bg-1.png)' }}>
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12">
                            <div class="hero-content">
                                <h6>Hey there,</h6>
                                <h2>Welcome to my React Portfolio!</h2>
                                <a eventKey="aboutme" onClick={() => {
                                    setHero(false);
                                    setProject(true);
                                }}><div class="btn rich-btn">view projects</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;

