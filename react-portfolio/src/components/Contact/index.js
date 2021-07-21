import React from 'react';

function Contact() {

    return (
        <>
            <section class="section-padding-80 clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-heading text-center">
                            <h1 class="display-4">Contact Me</h1>
                            <p class="lead">If you have any questions or inquiries, please send me a message below!</p> 
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type your message here..."></textarea>
                    </div>
                </div>
            </section>
            <div class="container">


            </div>
        </>
    );
}

export default Contact;