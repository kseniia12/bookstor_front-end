import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getBookToCartThunk } from '../../store/thunk/thunkBook';
import { StylesWrapper } from './style';
import BookFromCart from '../../components/BookFromCart/BookFromCart';

const Cart = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector((state) => state.cart.book);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  useEffect(() => {
    dispatch(getBookToCartThunk());
  }, [dispatch]);
  return (
    <StylesWrapper>
      <div className="books" >
        {Object.keys(books).map((bookId) => {
          return (
            <BookFromCart books={books[bookId]} key={bookId} className={''} />
          );
        })}
      </div>
      <div className='totalPrice'>Total: {totalPrice.toFixed(2)}</div>
    </StylesWrapper>
  )
}

export default Cart
