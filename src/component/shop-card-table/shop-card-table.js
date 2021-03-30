import React from 'react';
import './shop-card-table.css';
import {connect} from 'react-redux';
import {
    onEnlargeNumberBookShopList,
    onDeleteBookShopList,
    onDecreaseNumberBookShopList,
    itemsShopCost
} from "../../actions";


const ShopCardTable = ({shopList,
                           total,
                           onEnlargeNumberBookShopList,
                           onDeleteBookShopList,
                           onDecreaseNumberBookShopList
                           }) => {


    const ShopListRender = ((items, idx) => {
        const {id, name, cost, amount} = items;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{amount}</td>
                <td>${cost}</td>
                <td>
                    <button className='btn btn-outline-danger' onClick={() => onDeleteBookShopList(id)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <button className='btn btn-outline-success' onClick={() => onEnlargeNumberBookShopList(id)}>
                        <i className='fa fa-plus'></i>
                    </button>
                    <button className='btn btn-outline-warning' onClick={() => onDecreaseNumberBookShopList(id)}>
                        <i className='fa fa-minus'></i>
                    </button>
                </td>
            </tr>
        )
    })


    return <div className='shop-card-table'>
        <h2>Your Order</h2>
        <table className='table'>
            <thead>
            <tr>
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Total Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {shopList.map(ShopListRender)}


            </tbody>
        </table>
        <div className='total'>
            Total:${total}
        </div>
    </div>
}
const mapStateToProps = (state) => {
    return {
        shopList: state.itemsShopList,
        total: state.totalShop
    }
}
const mapDispatchToProps = {onEnlargeNumberBookShopList,
    onDeleteBookShopList,
    onDecreaseNumberBookShopList,
    itemsShopCost};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCardTable);


