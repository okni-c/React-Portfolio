import React from 'react';

function Card() {

    return (
        <>
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#59B640"/><text x="50%" y="50%" fill="#000000"
                            dy=".3em">sweat-nashville</text>
                    </svg>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <form action='https://github.com/okni-c/sweat-nashville'>
                                    <input type="submit" class="btn btn-sm btn-outline-secondary" value="View on GitHub" />
                                </form>
                            </div>
                            <small class="text-muted">Created June 22, 2021</small>
                        </div>
                    </div>
                </div>
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" /><text x="50%" y="50%" fill="#000000"
                            dy=".3em">Project Name</text>
                    </svg>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <form action='{data.html_url}'>
                                    <input type="submit" class="btn btn-sm btn-outline-secondary" value="View on GitHub" />
                                </form>
                            </div>
                            <small class="text-muted">Created</small>
                        </div>
                    </div>
                </div>
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" /><text x="50%" y="50%" fill="#000000"
                            dy=".3em">Project Name</text>
                    </svg>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <form action='{data.html_url}'>
                                    <input type="submit" class="btn btn-sm btn-outline-secondary" value="View on GitHub" />
                                </form>
                            </div>
                            <small class="text-muted">Created</small>
                        </div>
                    </div>
                </div>
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" /><text x="50%" y="50%" fill="#000000"
                            dy=".3em">Project Name</text>
                    </svg>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <form action='{data.html_url}'>
                                    <input type="submit" class="btn btn-sm btn-outline-secondary" value="View on GitHub" />
                                </form>
                            </div>
                            <small class="text-muted">Created</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}


export default Card;