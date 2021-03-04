import React from 'react';
import BookListConrainer from '../../containers';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <div>
      <BookListConrainer />
      <ShoppingCartTable />
    </div>
  )
};

export default HomePage;
