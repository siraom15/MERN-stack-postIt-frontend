import React from 'react';

const SignIn = () => {
    return (
        <>
            <div className="row mt-5 p-5">
                <div className="col-sm-12 col-md-4 col-lg-6">
                    <div className="display-6">
                        Sign In
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
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Input your password" />
                                </div>
                                <button type="submit" class="btn bg-pink text-white">Sign In</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn;