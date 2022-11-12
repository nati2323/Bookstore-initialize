import React from 'react';

const BooksList = (props) => {
  console.log(props.tite)
  return (
    <ul>
      <li>{props.title}  </li>
      <li>{props.author}  </li>
      <button type="submit">Remove</button>
       
    </ul>
  );
};
export default BooksList;
