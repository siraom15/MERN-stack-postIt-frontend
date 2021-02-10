import React from 'react';

const Post = () => {
    return (
        <div className="card">
            <img src="assets/images/test.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"><b>Fullname</b></h5>
                <p className="card-text text-break">Describe post</p>

                <form action="" className="row">
                    <div className="col-auto">
                        <button className="btn">
                            <i class="bi bi-heart" style={{ color: "red", }}></i>
                        </button>
                    </div>
                    <div className="col-auto">
                        <input type="text" class="form-control-plaintext border-bottom" id="staticEmail2" placeholder="Add your comment" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn">
                            <i class="bi bi-symmetry-horizontal"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Post;