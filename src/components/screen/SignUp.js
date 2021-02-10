import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';
const SignUp = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [email, setEmail] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault()
        if(repassword != password){
           return swal("Password Not Match", "", "error")
        }
        const payload = {
            name,
            password,
            email
        }
        fetch('http://localhost:5000/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status == 'error') {
                    swal(data.message, "", "error")
                } else {
                    swal(data.message, "", "success")
                    history.push('/signin');
                }
            })
    }
    return (
        <div className="row mt-5 p-5">
            <div className="col-sm-12 col-md-4 col-lg-6">
                <div className="display-6">
                    Sign Up
                    <hr />
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <form onSubmit={handlerSubmit}>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Input your email"
                                    onChange={e => { setEmail(e.target.value) }}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="fullname"
                                    placeholder="Input your name"
                                    onChange={e => { setName(e.target.value) }}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="Input your password"
                                    onChange={e => { setPassword(e.target.value) }}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="repassword" class="form-label">Confirm Password</label>
                                <input type="password"
                                    class="form-control"
                                    id="repassword"
                                    placeholder="Confirm your password"
                                    onChange={e => { setRepassword(e.target.value) }}
                                />
                            </div>
                            <button type="submit" class="btn bg-pink text-white">Sign Up</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;