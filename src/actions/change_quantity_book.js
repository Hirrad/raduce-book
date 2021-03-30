const changeQuantityBook = (arrayBook = [], arrayShopBook = [], id, act, state) => {
    const bookId = id;
    const itemsShopList = arrayShopBook;
    const items = arrayBook.find((el) => el.id === bookId);
    const idBook = itemsShopList.find((book) => book.id === items.id);
    const idArray = itemsShopList.indexOf(idBook)
    const item =itemsShopList[idArray]
    let pushItem = [{
        id: items.id,
        name: items.title,
        cost: items.price,
        amount: 1
    }];
    // const totalShop =()=> state.itemsShopList.reduce((sum, {cost}) => {
    //     return sum + cost;
    // }, 0)
    console.log(state.totalShop)
    switch (act) {
        case 'add':
            if (idArray >= 0) {
                ++idBook.amount;
                idBook.cost = items.price * idBook.amount;

                return {
                    ...state,
                    itemsShopList: [
                        ...itemsShopList.slice(0, idArray),
                        idBook,
                        ...itemsShopList.slice(idArray + 1)
                    ]
                }
            }
            return {
                ...state,
                itemsShopList: [...itemsShopList, ...pushItem]

            }
        case 'inc':
            ++idBook.amount;
            idBook.cost = items.price * idBook.amount;
            return {
                ...state,
                itemsShopList: [
                    ...itemsShopList.slice(0, idArray),
                    idBook,
                    ...itemsShopList.slice(idArray + 1)
                ]
            }
        case 'delete':
            return {
                ...state,
                itemsShopList: [
                    ...itemsShopList.slice(0, idArray),
                    ...itemsShopList.slice(idArray + 1)
                ]
            }
        case 'dec':
            if (idBook.amount === 1) {
                return {
                    ...state,
                    itemsShopList: [
                        ...itemsShopList.slice(0, idArray),
                        ...itemsShopList.slice(idArray + 1)
                    ]
                }
            }
            --idBook.amount;
            idBook.cost = items.price * idBook.amount;
            return {
                ...state,
                itemsShopList: [
                    ...itemsShopList.slice(0, idArray),
                    idBook,
                    ...itemsShopList.slice(idArray + 1)
                ]
            }

        default:
            return state;

    }

}
export {changeQuantityBook}