import React from 'react';

function Card() {

    return (
        <>
            {/* Start project card */}
            <a href="https://github.com/joshacross/final-project">
                <div class="row g-0 position-relative">
                    <div class="col-md-6 mb-md-0 p-md-4">
                        <img src="/assets/img/project-img/ar.png" class="w-100" alt="..." />
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                        <h5 class="mt-0">Augumented Retail</h5>
                        <p>An ecommerce React application utilizing cutting edge technologies in: augmented reality, 3D rendering, database managment and so much more.</p>
                    </div>
                </div>
            </a>
            <hr />
            {/* End project card */}

            {/* Start project card */}
            <a href="https://github.com/okni-c/sweat-nashville">
                <div class="row g-0 position-relative">
                    <div class="col-md-6 mb-md-0 p-md-4">
                        <img src="/assets/img/project-img/sweat-nashville.png" class="w-100" alt="..." />
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                        <h5 class="mt-0">Sweat Nashville</h5>
                        <p>Fullstack personal site for a client. Using express-handlebars.</p>
                    </div>
                </div>
            </a>
            <hr />
            {/* End project card */}

            {/* Start project card */}
            <a href="https://github.com/okni-c/e-commerce-back-end">
                <div class="row g-0 position-relative">
                    <div class="col-md-6 mb-md-0 p-md-4">
                        <img src="/assets/img/project-img/ecommerce.png" class="w-100" alt="..." />
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                        <h5 class="mt-0">E-Commerce Back End</h5>
                        <p>An E-Commerce back end created using Express.js, MySQL2, Sequelize, and dotenv.</p>
                    </div>
                </div>
            </a>
            <hr />
            {/* End project card */}

            {/* Start project card */}
            <a href="https://github.com/okni-c/SQL-Challenge-Employee-Tracker">
                <div class="row g-0 position-relative">
                    <div class="col-md-6 mb-md-0 p-md-4">
                        <img src="/assets/img/project-img/sql.png" class="w-100" alt="..." />
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                        <h5 class="mt-0">SQL Challenge Employee Tracker</h5>
                        <p>A database content management system using Node.js, Inquirer, and MySQL.</p>
                    </div>
                </div>
            </a>
            <hr />
            {/* End project card */}

            {/* Start project card */}
            <a href="https://github.com/okni-c/Model-View-Controller-Tech-Blog">
                <div class="row g-0 position-relative">
                    <div class="col-md-6 mb-md-0 p-md-4">
                        <img src="/assets/img/project-img/blog.png" class="w-100" alt="..." />
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                        <h5 class="mt-0">Tech Blog</h5>
                        <p>A full stack tech blog project using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.</p>
                    </div>
                </div>
            </a>
            <hr />
            {/* End project card */}

            {/* Start project card */}
            <a href="https://github.com/okni-c/Budget-Tracker-PWA" class="stretched-link">
                <div class="row g-0 position-relative">
                    <div class="col-md-6 mb-md-0 p-md-4">
                        <img src="/assets/img/project-img/budget.png" class="w-100" alt="..." />
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                        <h5 class="mt-0">Budget-Tracker PWA</h5>
                        <p>The goal of this project is to update an existing budget tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.

                            This projects uses Node, Express, MondgoDB Atlas, IndexedDB and Heroku.</p>
                    </div>
                </div>
            </a>
            <hr />
            {/* End project card */}

        </>
    );

}


export default Card;