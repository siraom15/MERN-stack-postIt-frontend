import React from 'react';

const SignUp = () => {
    return (
        <>
            <div className="row mt-5 p-5">
                <div className="col-sm-12 col-md-4 col-lg-6">
                    <div className="display-6">
                        Sign Up
                        <hr/>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" placeholder="Input your email" />
                                </div>
                                <div class="mb-3">
                                    <label for="fullname" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="fullname" placeholder="Input your name" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Input your password" />
                                </div>
                                <div class="mb-3">
                                    <label for="repassword" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" id="repassword" placeholder="Confirm your password" />
                                </div>
                                <button type="submit" class="btn bg-pink text-white">Sign Up</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp;