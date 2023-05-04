import React, { useState } from "react";
import Styles from "./Review.module.css"

function Reviews() {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { userName: userName, comment: comment, timestamp: new Date() };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setUserName("");
    setComment("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    const timestamp = new Date(data.timestamp).toLocaleString();
    return (
      <div key={index} className={Styles.commentContainer}>
        <h4>{data.userName}:</h4>
        <p>{data.comment}</p>
        <span className={Styles.timestamp}>{timestamp}</span>
      </div>
    );
  });

  return (
    <div  className={Styles.body}>
      <header>
        <h1>REVIEWS</h1>
        <div>
          <input type="radio" id="star5" name="rating" value="5" />
          <label htmlFor="star5" title="5 stars">&#9733;</label>
          <input type="radio" id="star4" name="rating" value="4" />
          <label htmlFor="star4" title="4 stars">&#9733;</label>
          <input type="radio" id="star3" name="rating" value="3" />
          <label htmlFor="star3" title="3 stars">&#9733;</label>
          <input type="radio" id="star2" name="rating" value="2" />
          <label htmlFor="star2" title="2 stars">&#9733;</label>
          <input type="radio" id="star1" name="rating" value="1" />
          <label htmlFor="star1" title="1 star">&#9733;</label>
        </div>
      </header>
      <main>
        <form id="comment-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={userName} onChange={handleUserNameChange} required />
          
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment" value={comment} onChange={handleCommentChange} required></textarea>
          
          <button type="submit">Post Comment</button>
        </form>
        
        <div id="comments">{listOfSubmissions}</div>
      </main>
    </div>
  );
}

export default Reviews;
