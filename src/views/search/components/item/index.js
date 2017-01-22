import React from 'react';

import Keyword from '../keyword';

import css from './style.css';

class Item extends React.Component {
    constructor() {
        super();

        this.state = {
            reviews: []
        };
        
        this.onKeywordSelected = this.onKeywordSelected.bind(this);
    }

    onKeywordSelected(reviews) {
        this.setState({
            reviews: reviews
        });
    }

    render() {
        let { name, img, keywords } = this.props;
        const reviews = this.state.reviews;

        return (
            <div className={css.wrap}>
                <div className={css.item}>
                    <img src={img} className={css.img} />
                    <div className={css.meta}>
                        <div className={css.title}>{name}</div>
                        <div className={css.keywords}>
                            {keywords.map((keyword, i) => (
                                <Keyword 
                                    key={i} keyword={keyword}
                                    onKeywordSelected={this.onKeywordSelected} />
                            ))}
                        </div>
                        {(() => {
                            if (reviews.length > 0) {
                                return (
                                    <div className={css.reviews}>
                                        {reviews.map(({ source, phrase, type }, i) => (
                                            <a 
                                                className={css.review + ' ' + (type === 'good' ? css.green : css.red)} key={i}
                                                href={source} target="_blank">
                                                <i className={`fa ${(type === 'good' ? 'fa-thumbs-up' : 'fa-thumbs-down')} ${css.fa}`} />
                                                {phrase}
                                            </a>
                                        ))}
                                    </div>
                                );
                            }
                        })()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;