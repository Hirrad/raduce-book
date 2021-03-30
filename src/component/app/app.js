import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {HomePage, CartPage} from '../pages/index'
import ShopHeader from "../shop-header";
const  App =()=>{

    return <main role='main' className='container'>
        <ShopHeader numItems={5} total={345}/>
        <Switch>
            <Route path ='/' component={HomePage} exact/>
            <Route path ='/card' component={CartPage}/>
        </Switch>
    </main>
}

export default  App;