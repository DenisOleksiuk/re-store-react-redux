import BookListItem from '../book-list-item';
import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list" >
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} onAddedToCart={onAddedToCart} />
            </li>
          )
        })
      }
    </ul>
  )
}

export { BookList };
