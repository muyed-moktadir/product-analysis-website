import React from "react";
import useBooks from "../../CustomHook/CustomHook";

import b_img from "../image/b_img.jpg";
import Review from "../Review/Review";
import "./Home.css";
const Home = () => {
  const [books] = useBooks();

  return (
    <div className="home-section">
      <div className="cozy-library-info">
        <div>
          <h1>Cartoon Book's World !!</h1>
          <p>
            “Yesterday is history, tomorrow is a mystery, and today is a gift...
            that's why they call it the present” - Master Oogway, 'Kung Fu
            Panda’.
          </p>
        </div>
        <div>
          <img src={b_img} alt="" />
        </div>
      </div>

        <h1>Review three Books</h1>
      <div className="review-three-items">
        {books.slice(0, 3).map((book) => (
          <Review key={book.id} book={book}></Review>
        ))}
      </div>
      <button className="see-more-book-btn">
        <p>see more books</p>
      </button>
    </div>
  );
};

export default Home;
