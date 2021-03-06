import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreSrvice } from '../components/hoc';
import { fetchBooks, bookAddedToCart } from '../actions';
import { compose } from "../utils";
import Spinner from '../components/spinner';
import { BookList } from "../components/book-list";
import ErrorIndicatior from '../components/error-indicator';

const BookListConrainer = (props) => {
  const { fetchBooks, books, loading, error, onAddedToCart } = props;
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks]);

  if (loading) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return <ErrorIndicatior />
  }

  return <BookList books={books} onAddedToCart={onAddedToCart} />
};

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreSrvice(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListConrainer);