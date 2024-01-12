import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Updatenotes() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();

  //date function for the current date and time of the note
  const dateString = `${
    months[d.getMonth()]
  } ${d.getDay()} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `;

  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useNavigate();

  //it is for the get data from the local storage and store in the useState { id title description}
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setDescription(localStorage.getItem("description"));
  }, []);

  // update function
  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://659cdd73633f9aee790809d3.mockapi.io/my_notes/${id}`, {
        title: title,
        description: description,
        date: dateString,
      })
      .then(() => {
        alert("Note has been Updated Successfully");
        history("/mynotes");
      });
  };

  return (
    <>
      <div className="container">
        <div className="container my-3">
          <h1>Update Notes :</h1>
        </div>
        <form>
          <div className=" container mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title :
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Title"
            />
          </div>
          <div className="container mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description :
            </label>
            <textarea
              className="form-control"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Leave a Note here"
              id="floatingTextarea"
            />
          </div>
          <div className="container">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
