import React from 'react';

function Hero() {

    return (
        <>
            <section class="welcome_area bg-img background-overlay" style={{ backgroundImage: 'url(assets/img/bg-img/bg-1.jpg)' }}>
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12">
                            <div class="hero-content">
                                <h6>Hey there,</h6>
                                <h2>Welcome to my React Portfolio!</h2>
                                <a href="/projects" class="btn rich-btn">view projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;

