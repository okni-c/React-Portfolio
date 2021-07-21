import React from 'react';

function Footer() {

    return (
        <>
            <footer class="footer_area clearfix">
                <div class="container">
                    <div class="row">

                        <div class="col text-center">
                            <div class="single_widget_area">
                                <div class="footer_social_area">
                                    <a href="https://github.com/okni-c" data-toggle="tooltip" data-placement="top" title="GitHub"><i class="fa fa-github" aria-hidden="true"></i></a>
                                    <a href="https://www.linkedin.com/in/kevin-yatsinko-a2a155175/" data-toggle="tooltip" data-placement="top" title="LinkedIn"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                    <a href="https://stackoverflow.com/users/story/15025207?newreg=b8989ce538814936afa648bf34854c42&_=1" data-toggle="tooltip" data-placement="top" title="Stack Overflow"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5">
                        <div class="col-md-12 text-center">
                            <p>

                                Made by Kevin Dallas Yatsinko with React.

                            </p>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;