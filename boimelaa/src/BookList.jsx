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

// ekhane li te key={book.id} return kora hoise. eta react er niyom. kono li ke return korle etar sathe ekta key return korte hobe. and key er value hobe unique. ekhane book.id unique. so, book.id return kora hoise.
function BookList() {
  return (
    <ul className="space-y-4">
      {BOOKS.map((book) => (
        <li
          key={book.id}
          className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
        >
          <BookRow book={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
