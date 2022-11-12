import React from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';

const Books = () => {
  let books = [ { title: 'bears trap', author: 'hamid gul' } ,
                { title: 'confessions', author: 'Agatha christie' }
 ];
  const BookList = books.map ( book => {
           return (<BooksList title={ book.title } author = { book.author } />)
  });
  return (
  <div>
    { BookList }
     <AddBook />
  </div>
  )
};

export default Books;
