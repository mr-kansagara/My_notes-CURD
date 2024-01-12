import axios from 'axios'
import React, { useState } from 'react'

export default function Notes() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();

    const dateString = `${months[d.getMonth()]} ${d.getDay()} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `;


    const handleSubmit = async (e) => {
        if (title !== "" && description !== "") {
            e.preventDefault();
            await axios.post("https://659cdd73633f9aee790809d3.mockapi.io/my_notes", {
                title: title,
                description: description,
                date: dateString
            }).then(() => {
                document.getElementById("alert").innerHTML= "Note Saved sucessfully";
                setTimeout(() => {
                    document.getElementById("alert").innerHTML= null
                }, 1500);
            
            })
        }
        else{
            alert("Please enter data....!")
        }
    }


    return (
        <>
            <div className='container'>
                <div className='container my-3'>
                    <h1>Create Notes :<span id='alert'></span> </h1>
                </div>
                <form>
                    <div className=" container mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title :</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Title' aria-describedby="emailHelp" />

                    </div>
                    <div className="container mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Description :</label>
                        <textarea className="form-control" rows={5} onChange={(e) => setDescription(e.target.value)} placeholder="Leave a Note here" id="floatingTextarea" defaultValue={""} />
                    </div>
                    <div className='container'>
                        <button type="submit" id='resetBtn' className="btn btn-info">Reset</button>
                        <button type="submit" id="submitBtn" className="btn btn-primary" onClick={handleSubmit}>Add Note +</button>
                    </div>
                </form>
            </div>

        </>
    )
}
