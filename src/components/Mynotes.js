import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Mynotes() {
    const [data, setData] = useState([])


    //get the data from the api and store in the data variable
    function retriveData() {
        axios.get("https://659cdd73633f9aee790809d3.mockapi.io/my_notes").then((res) => {
            setData(res.data)
        })
    }

    //delete btn 
    const handleDelete = (id) => {
        var c = window.confirm("are you sue want to delete the note ? ");
        if (c === true) {
            axios.delete(`https://659cdd73633f9aee790809d3.mockapi.io/my_notes/${id}`).then(() => {
                retriveData()
            })
        }


    }

    //set the data in the local storage
    function setDataToLocalStorage(id, title, description) {
        localStorage.setItem('id', id)
        localStorage.setItem("title", title)
        localStorage.setItem("description", description)
    }

    // whenever data changed that time useeffect exicute
    useEffect(() => {
        retriveData();
    }, [])


    return (
        <>
            <div className='container'>
                <div className='row '>
                    
                    {/* map() function of fatch the data and represent in the mynotes page */}
                        {
                            data.map((item) => {
                                return (
                                    <div className='col-md-4'>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text">{item.date}</p>
                                            <Link to="/update" ><button onClick={() => { setDataToLocalStorage(item.id, item.title, item.description) }} className='btn btn-primary'>Edit Note</button></Link>
                                            <Link to="#" ><button onClick={() => handleDelete(item.id)} className='btn btn-danger mx-3'>Delete Note</button></Link>
                                        </div>
                                    </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                
            </div>


        </>
    )
}
