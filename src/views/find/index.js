import React from 'react';
import { Link } from 'react-router';

import FeatureSelector from './components/featureSelector';

import css from './style.css';

class Find extends React.Component {
    constructor() {
        super();

        this.state = {
            prosList: [{ name: "방수" }, { name: "배터리" }, { name: "디자인" }, { name: "발열" }, { name: "셀카" }],
            consList: [{ name: "방수" }, { name: "배터리" }, { name: "디자인" }, { name: "발열" }, { name: "셀카" }]
        }
        
        this.onProsClicked = this.onProsClicked.bind(this);
    }

    onProsClicked(name) {
        let prosList = this.state.prosList.map((pro) => {
            if (pro.name === name) {
                pro.selected = !pro.selected;
            }
            return pro;
        });

        this.setState({
            prosList: prosList
        });
    }

    onConsClicked(name) {
        let consList = this.state.consList.map((con) => {
            if (con.name === name) {
                con.selected = !con.selected;
            }
            return con;
        });

        this.setState({
            consList: consList
        });
    }

    render() {
        return (
            <div>
                <div className={css.top}>
                    <div className={css.wrap}>
                        <header className={css.header}>
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
                        </header>
                        <section className={css.questions}>
                            <div className={css.inlineQuestionWrap}>
                                <h1 className={css.h1}>
                                    <span className={css.number}>1</span> 
                                    어떤 제품을 찾고 계신가요?
                                </h1>
                                <div className={css.buttonWrap}>
                                    <button>노트북</button>
                                    <button>핸드폰</button>
                                </div>
                            </div>
                            <div className={css.questionWrap}>
                                <h1 className={css.h1}>
                                    <span className={css.number}>2</span> 
                                    노트북이 가졌으면 하는 장점은 무엇인가요?
                                </h1>
                                <FeatureSelector 
                                    features={this.state.prosList}
                                    onFeatureClicked={this.onProsClicked} />
                            </div>
                            <div className={css.questionWrap}>
                                <h1 className={css.h1}>
                                    <span className={css.number}>3</span> 
                                    노트북이 가지지 않았으면 하는 단점은 무엇인가요?
                                </h1>
                                <FeatureSelector 
                                    features={this.state.consList}
                                    onFeatureClicked={this.onConsClicked} />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Find;