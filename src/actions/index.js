import {changeQuantityBook} from "./change_quantity_book";

const bookLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADER',
        payload: newBooks
    }
}
const bookLoadingPassed = () => {
    return {
        type: 'BOOKS_LOADING_PASSED',

    }
}
const onAddShopCard = (id) => {
    return {
        type: 'ON_ADD_SHOP_CARD',
        payload: id,
        act: 'add'
    }
}
const onDecreaseNumberBookShopList = (id) => {
    return {
        type: 'ON_DECREASE_NUMBER_BOOK_SHOP_LIST',
        payload: id,
        act: 'dec'
    }
}
const onEnlargeNumberBookShopList = (id) => {
    return {
        type: 'ON_ENLARGE_NUMBER_BOOK_SHOP_LIST',
        payload: id,
        act: 'inc'
    }
}
const itemsShopCost = () => {
    return {
        type: 'ITEMS_SHOP_COST'

    }
}
const onDeleteBookShopList = (id) => {
    return {
        type: 'ON_DELETE_BOOK_IN_SHOP_LIST',
        payload: id,
        act: 'delete'
    }
}
export {
    bookLoaded,
    bookLoadingPassed,
    onAddShopCard,
    changeQuantityBook,
    onEnlargeNumberBookShopList,
    onDeleteBookShopList,
    onDecreaseNumberBookShopList,
    itemsShopCost
}