import React from 'react';
import './book-item.css';
import {Link} from 'react-router-dom'

const BookItem = ({book,addToCard}) => {
    const {author, title, price,imgBook} = book;

    return (
        <div className='book-item'>

            <div className='book-cover'>
                <img src={imgBook} alt="cover"/>
            </div>
            <div className='book-details'>
                <Link  to='/' className='book-title'>{title}</Link>
                <div className='book-author'>{author}</div>
                <div className='book-price'>${price}</div>
                <button className='btn btn-info add-to-card' onClick={addToCard}>Add to Card</button>
            </div>

        </div>
    )
}
export default BookItem