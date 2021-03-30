const changeQuantityBook = (arrayBook = [], arrayShopBook = [], id, act, state) => {
    const bookId = id;
    const itemsShopList = arrayShopBook;
    const items = arrayBook.find((el) => el.id === bookId);
    const idBook = itemsShopList.find((book) => book.id === items.id);
    const idArray = itemsShopList.indexOf(idBook)
    const item = itemsShopList[idArray]
    let pushItem;
    const totalShop =()=> state.itemsShopList.reduce((sum, {cost}) => {
        return sum + cost;
    }, 0)
    // console.log(` Обшая стоимость${state.totalShop}`)
    switch (act) {
        case 'add':
            if (item) {
                pushItem = {
                    ...item,
                    amount:++item.amount,
                    cost:items.price * item.amount
                }
                // console.log(` в добавлении add стоимость товара в суме ${pushItem.cost}`)
                console.log(` Общая стоимость add стоимость товара в суме ${item.cost}`)

                return {
                    ...state,
                    totalShop: state.totalShop+items.price,
                    itemsShopList: [
                        ...itemsShopList.slice(0, idArray),
                        pushItem,
                        ...itemsShopList.slice(idArray + 1)
                    ]
                }
            }
            pushItem = {
                id: items.id,
                name: items.title,
                cost: items.price,
                amount: 1
            };
            console.log(items.price)
            return {
                ...state,
                totalShop:state.totalShop+items.price,
                itemsShopList: [...itemsShopList, pushItem]
            }
        case 'inc':

            pushItem = {
                ...item,
                amount:++item.amount,
                cost:items.price * item.amount
            }

            return {
                ...state,
                totalShop: state.totalShop+items.price,
                itemsShopList: [
                    ...itemsShopList.slice(0, idArray),
                    pushItem,
                    ...itemsShopList.slice(idArray + 1)
                ]
            }
        case 'delete':
            console.log(item.cost)
            return {
                ...state,
                totalShop: state.totalShop-item.cost,
                itemsShopList: [
                    ...itemsShopList.slice(0, idArray),
                    ...itemsShopList.slice(idArray + 1)
                ]
            }
        case 'dec':
            if (item.amount === 1) {
                return {
                    ...state,
                    totalShop: state.totalShop-items.price,
                    itemsShopList: [
                        ...itemsShopList.slice(0, idArray),
                        ...itemsShopList.slice(idArray + 1)
                    ]
                }
            }
            pushItem = {
                ...item,
                amount: --item.amount,
                cost:items.price * item.amount
            };
            return {
                ...state,
                totalShop: state.totalShop-items.price,
                itemsShopList: [
                    ...itemsShopList.slice(0, idArray),
                    pushItem,
                    ...itemsShopList.slice(idArray + 1)
                ]
            }

        default:
            return state;

    }

}
export {changeQuantityBook}