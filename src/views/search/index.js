import React from 'react';
import ConnectionManager from 'modules/connection';

import Item from './components/item';

import css from './style.css';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    getModeName() {
        switch (this.props.type) {
            case 'smartphone':
                return "핸드폰";
            case 'laptop':
                return "노트북";
        }
    }

    async componentWillMount() {
        let { query } = this.props.location;
        let pros = query.pros || '없음', cons = query.cons || '없음';

        let data = await ConnectionManager.getProducts(query.pros);

        this.setState({
            data: data
        });
    }

    render() {
        let { query } = this.props.location;
        let pros = query.pros || '없음', cons = query.cons || '없음';

        const data = this.state.data;

        return (
            <div>
                <div className={css.columns}>
                    <section className={css.column}>
                        <span className={css.label}>
                            선택한 제품
                        </span>
                        {this.getModeName()}
                    </section>
                    <section className={css.column}>
                        <span className={css.label}>
                            원하는 장점
                        </span>
                        {pros.replace(/,/g, ', ')}
                    </section>
                    <section className={css.column}>
                        <span className={css.label}>
                            원치 않는 단점
                        </span>
                        {cons.replace(/,/g, ', ')}
                    </section>
                </div>
                <section className={css.suggestions}>
                    <div className={css.howAbout}>
                        이런 제품 어떠신가요?
                    </div>
                    {data.map((item, i) => (
                        <Item key={i} {...item} />
                    ))}
                </section>
            </div>
        );
    }
}

export default Search;