import { useEffect, useState } from "react";
import swal from "sweetalert";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [describe, setDescribe] = useState("")
    const handlerSubmit = (e) => {
        e.preventDefault();
        const payload = {
            title: title,
            body: describe
        }
        fetch('http://localhost:5000/createpost', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("jwt")
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                if(data.status === 'error'){
                    swal(data.message,"","error")
                }else{
                    swal(data.message,JSON.stringify(data.post),"success")
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="container">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5>create post</h5>
                    <hr />
                    <form onSubmit={handlerSubmit}>
                        <div className="mb-3">
                            <label for="title" className="form-label">Title</label>
                            <input type="text"
                                className="form-control"
                                id="title"
                                onChange={e => { setTitle(e.target.value) }}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="desc" className="form-label">Describe</label>
                            <textarea
                                className="form-control"
                                id="desc"
                                onChange={e => { setDescribe(e.target.value) }}
                            />
                        </div>
                        <button type="submit" className="btn bg-pink text-white">Post</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default CreatePost;