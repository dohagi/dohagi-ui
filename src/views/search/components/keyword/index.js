import React from 'react';

import css from './style.css';

const Keyword = ({ keyword: {name, reviews}, onKeywordSelected }) => (
    <div className={css.wrap}
        onClick={() => onKeywordSelected(reviews)}>
        <span className={css.keyword}>
            <b style={{color: '#48bf83'}}>
                <i className="fa fa-thumbs-up" />
                {reviews.filter(({type}) => type === 'good').length}
            </b>
            <span>
                {name}
            </span>
            <b style={{color: '#ef564f'}}>
                <i className="fa fa-thumbs-down" />
                {reviews.filter(({type}) => type === 'bad').length}
            </b>
        </span>
    </div>
);

export default Keyword;