import React from 'react';

const AddBook = () => {
  return (
  <form>
    <h2>ADD NEW BOOK</h2>
    <div>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author Name" />
      <select>
        <option disabled selected> Category </option>
        <option>Engineering</option>
        <option>Social</option>
        <option>Fiction</option>
        <option>Science</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </div>
  </form>
  )
  };

export default AddBook;
