import React from 'react';
import { Link } from 'react-router';

import css from './style.css';

const Header = () => (
    <header className={css.header}>
        <div className={css.wrap}>
            <Link to="/" className={css.title}>
                d+hagi
                <span className={css.small}>
                    새로운 선택의 시작
                </span>
            </Link>

            <div className={css.rightMenu}>
                <Link to="/">찾아보기</Link>
                <Link to="/about">소개</Link>
            </div>
        </div>
    </header>
);

export default Header;