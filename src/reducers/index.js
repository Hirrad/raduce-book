import {changeQuantityBook} from "../actions";

const initialState = {
    books: [],
    loading: true,
    itemsShopList: [],
    totalShop: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADER':
            return {
                ...state,
                books: action.payload,
                loading: false
            };
        case 'BOOKS_LOADING_PASSED':
            return {
                ...state,
                books: [],
                loading: true
            };
        case 'ON_ADD_SHOP_CARD':
            return changeQuantityBook(state.books,
                state.itemsShopList,
                action.payload,
                action.act,
                state)
        case 'ON_ENLARGE_NUMBER_BOOK_SHOP_LIST':
            return changeQuantityBook(state.books,
                state.itemsShopList,
                action.payload,
                action.act,
                state);
        case 'ON_DELETE_BOOK_IN_SHOP_LIST':
            return changeQuantityBook(state.books,
                state.itemsShopList,
                action.payload,
                action.act,
                state);
        case 'ON_DECREASE_NUMBER_BOOK_SHOP_LIST':
            return changeQuantityBook(state.books,
                state.itemsShopList,
                action.payload,
                action.act,
                state);
        case 'ITEMS_SHOP_COST':
            console.log('ITEMS_SHOP_COST');
            const totalShop = state.itemsShopList.reduce((sum, {cost}) => {
                return sum + cost;
            }, 0)

            return {
                ...state,
                totalShop
            };
        default:
            return state;
    }

};
export default reducer;