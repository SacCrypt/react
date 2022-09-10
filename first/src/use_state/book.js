import React from "react";

const Book = ({ id, img, title }) => {
  return (
    <article className="book">
      <img onClick={(e) => console.log(e.target)} src={img} />
      <h1> {title} </h1>
    </article>
  );
};

export default Book;
