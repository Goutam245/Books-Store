import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList, addToStoreWishList } from '../../Utility/addToDb';

const BookDetail = () => {
    const {bookId} = useParams()

    const data = useLoaderData()
    const id = parseInt(bookId)

   const book = data.find(book => book.bookId === id);
   //console.log(book)
    
   const {bookId: currentBookId, image, bookName, review, author, rating, category, totalPages, publisher, yearOfPublishing} = book


   const handleMarkAsRead = (id) => {
       /**
        * 1. Understore what to store or save: => bookId
        * 2. Where to Store: database
        * 3. Array, List, Collection: 
        * 4: Check: if the book is already in the readList.
        * 5: if not, then add yhe book to the list
        * 6: if yes, do not raed the book
        */

       addToStoreReadList(id)
     addToStoreWishList(id)
   }

    return (
        <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row ">
    <div className='rounded-xl'>
    <img
      src={image}
      className="max-w-sm rounded-lg mx-8 shadow-4xl" />
    </div>
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <div className="divider"></div>
      <h2 className='text-2xl '>By: {author}</h2>
      <div className="divider"></div>
      <p className='font-semibold'>{category}</p>
      <p className="py-6">
       <span className='font-bold'>Review:</span> {review}
      </p>
        <div className="divider"></div>
        <p> <span className='font-bold'>Number Of Pages: </span>{totalPages}</p>
        <p> <span className='font-bold'>Publisher: </span>{publisher}</p>
        <p> <span className='font-bold'>year Of Publishing: </span>{yearOfPublishing}</p>
        <p> <span className='font-bold'>Rating: </span>{rating}</p>
         <div className="divider"></div>
      <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-primary btn-outline mr-4">Mark As Read</button>
      <button onClick={() => addToStoreWishList(bookId)} className="btn btn-info">Add To WishList</button>
    </div>
  </div>
</div>
    );
};

export default BookDetail;