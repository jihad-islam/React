import BookRow from "./BookRow";

// json data for books
const BOOKS = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    featured: false,
  },

  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    featured: false,
  },

  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    featured: false,
  },

  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    featured: false,
  },

  {
    id: 5,
    title: "1984",
    author: "George Orwell",
    featured: false,
  },
];

function Booklist() {
  return (
    <ul>
      {BOOKS.map((book) => (
        <li key={book.id}>
          <BookRow x={book} />
        </li>
      ))}
    </ul>
  );
}

export default Booklist;
