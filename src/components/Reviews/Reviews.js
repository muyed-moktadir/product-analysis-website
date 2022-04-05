import React from 'react';
import useBooks from '../../CustomHook/CustomHook';
import AllBooks from '../AllBooks/AllBooks';

const Reviews = () => {
    const [books,setBooks]= useBooks();

    return (
        <div>
            <h1>Review All Books</h1>
            <div className='all-review-books'>
            {
                books.map(book=><AllBooks 
                key={book.id} 
                book={book}></AllBooks>)
            }
            </div>
        </div>
    );
};

export default Reviews;