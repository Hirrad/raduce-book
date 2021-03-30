import React from 'react';
import ReactDOM from 'react-dom'
import App from "./component/app";
import ErrorBoundary from "./component/error-boundary";
import {BookServiceProvider} from "./component/context";
import {Provider} from 'react-redux'
import BookService from "./serviсe/bookService";
import store from "./store";
import {BrowserRouter as Router} from 'react-router-dom';

const bookStoreService = new BookService();
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookServiceProvider value={bookStoreService}>
                <Router>
                    <App/>
                </Router>
            </BookServiceProvider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));
