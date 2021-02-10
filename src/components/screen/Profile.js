import React from 'react';
import Post from '../Post/Post';

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
                                <Post />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )

}

export default Profile;