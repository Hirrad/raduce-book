import React, {Component} from 'react';
import './book-item-list.css';
import BookItem from "../book-item";
import './book-item-list.css'
import {connect} from 'react-redux'
import withBookStoreService from "../hoc";
import {bookLoaded, bookLoadingPassed, onAddShopCard} from "../../actions";
import {compose} from "../../utils";
import Spinner from "../spinner";

class BookItemList extends Component {

    componentDidMount() {
        const {bookStoreService, bookLoaded, bookLoadingPassed} = this.props;

        bookLoadingPassed();

        bookStoreService.getBooks().then((book) => bookLoaded(book));

    }

    // addToCard=(id)=>{
    //     return console.log(id);
    // }
    render() {
        const {books, loading, onAddShopCard} = this.props

        if (loading) {
            return <Spinner/>;
        }
        return (
            <ul className='book-item-list'>
                {books.map((book) => {
                    const {id} = book
                    return (
                        <ul key={id}><BookItem book={book} loading={loading} addToCard={() => onAddShopCard(id)}/></ul>
                    )
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    bookLoaded,
    bookLoadingPassed,
    onAddShopCard
};


// export default withBookStoreService()(connect(mapStateToProps,mapDispatchToProps)(BookItemList));
export default compose(withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))
(BookItemList);
// const mapDispatchToProps=(dispatch)=>{
// return{
//     bookLoaded:(newBooks)=>{
//         dispatch ({
//             type: 'BOOKS_LOADER',
//             payload: newBooks
//         })
//     }
// }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         bookLoaded:(newBooks)=>{
//             dispatch (bookLoaded(newBooks))
//         }
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return bindActionCreators({
//         bookLoaded}, dispatch)
//
// }
// {bindActionCreators} from 'redux'