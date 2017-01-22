import React from 'react';
import { Link } from 'react-router';

import Header from 'views/header';

import css from './style.css';

const Layout = ({ children }) => (
    <div>  
        <div className={css.background} />
        <Header />
        <div className={css.wrap}>
            <div className={css.box}>
                {children}
            </div>
        </div>
    </div>
);

export default Layout;