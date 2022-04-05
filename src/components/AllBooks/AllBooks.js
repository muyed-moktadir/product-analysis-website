import React from "react";
import "./AllBooks.css";

const AllBooks = ({ book }) => {
  const { name, img, rating, about } = book;
  return (
    <div className="all-books">
      <div className="all-books-image">
        <img src={img} alt="" />
      </div>
      <div>
        <h4>Name: {name} </h4>
        <p align="justify" title={about}>
          About: {about.length > 20 ? about.slice(0, 150) + "..." : about}
        </p>
        <p>Rating: {rating} stars</p>
      </div>
    </div>
  );
};

export default AllBooks;
