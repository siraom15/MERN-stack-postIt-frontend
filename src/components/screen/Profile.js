import React from 'react';

const Profile = () => {
    return (
        <div className="row mt-2">
            <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <img src="assets/images/user1.jpeg" width="30%" height="20%" class="rounded img-fluid mx-auto d-block" alt="..." />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <div className="text-center">
                                    <h5>Full name</h5>
                                    <p>
                                        <span>
                                            follower : 231
                                    </span>
                                        <span>  </span>
                                        <span>
                                            following : 231
                                    </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="text-center h5">
                            All post
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <img src="assets/images/user1.jpeg" width="20%" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Fullname</h5>
                                        <p className="card-text text-break">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )

}

export default Profile;