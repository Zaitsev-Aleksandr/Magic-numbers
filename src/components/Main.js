import React from 'react';
import {Provider} from 'react-redux'
import { store } from '../redux/store'
import Header from "./Header";
import Wrapper from "./Wrapper";


const Main = () => {
    return (
        <Provider store={store}>
            <Header/>
            <Wrapper/>
        </Provider>


    );
};

export default Main;
