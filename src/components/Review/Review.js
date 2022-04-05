import React from "react";
import "./Review.css";

const Review = ({ book }) => {
  console.log(book);
  const { name, img, rating, about } = book;
  return (
    <div className="book">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h4>Name: {name} </h4>
        <p align="justify">About: {about.length > 20? about.slice(0,150) +'...': about}</p>
        <p>Rating: {rating} stars</p>
      </div>
    </div>
  );
};

export default Review;
