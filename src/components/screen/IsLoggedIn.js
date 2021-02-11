import React from 'react';
import swal from 'sweetalert';

const IsLoggedIn = () => {
    const checkIt = () => {
        fetch("http://localhost:5000/isLoggedIn", {
            headers:{
                "Content-Type":"application/json",
                "Authorization" : "Bearer "+localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(data => {
                swal(JSON.stringify(data))
            })

    }
    return (
        <>
            <button onClick={checkIt}>Click</button>
        </>
    );
}

export default IsLoggedIn;