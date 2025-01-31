import React from 'react'
import { IBookProps } from '../Book/Book'

const BookProduct: React.FC<IBookProps> = ({ books }) =>{
  return (
    <div>
      {/* <div className="book" onClick={sendBookId}>
        <Button className="book__favorites" onClick={AddOrRemoveFavorites} />
        <img
          className="book__img"
          src={`http://localhost:4000/upload/${books.cover}`}
          alt="Book"
        />
      </div> */}
      <div>
        <div className="genre">{books.name}</div>
        <div className="author">{books.author.name}</div>
      </div>
      <div>
        
        {/* <Button className="button" text={`$${books.priceHard} USD`} /> */}
      </div>
    </div>
  )
}

export default BookProduct
