const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksFetchError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
};

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  };
};

export const bookDeleteFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETE_FROM_CART',
    payload: bookId,
  };
};

export const plusItemInCart = (bookId) => {
  return {
    type: 'PLUS_ITEM_IN_CART',
    payload: bookId,
  };
};

export const minusItemInCart = (bookId) => {
  return {
    type: 'MINUS_ITEM_IN_CART',
    payload: bookId,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
  .then((data) => dispatch(booksLoaded(data)))
  .catch((error) => {
    dispatch(booksFetchError(error))
  });
};

export {
  fetchBooks,
};
