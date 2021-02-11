import React, { useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom'
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) return swal("Fill the form", "", "error")

        const payload = {
            email,
            password
        }
        fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),

        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                if (data.status === "error") {
                    return swal(data.message, "", "error")
                } else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    return swal(data.message, "", "success")
                }
            })
            .catch(err => {
                return swal("Server timeout", "", "error")
            })
    }

    return (
        <>
            <div className="row mt-5 p-5">
                <div className="col-sm-12 col-md-4 col-lg-6">
                    <div className="display-6">
                        Sign In
                        <hr />
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <form onSubmit={handlerSubmit}>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Input your email"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Input your password"
                                        onChange={e => setPassword(e.target.value)}

                                    />
                                </div>
                                <button type="submit" className="btn bg-pink text-white">Sign In</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn;