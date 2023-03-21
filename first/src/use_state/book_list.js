import { books } from "./books.js";
import Book from "./book.js";
const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

export default Booklist;
