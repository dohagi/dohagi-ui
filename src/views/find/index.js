import React from 'react';
import { browserHistory, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ConnectionModule from 'modules/connection';

import Header from 'views/header';
import FeatureSelector from './components/featureSelector';

import css from './style.css';

const mode = {
    notSelected: 0,
    laptop: 1,
    phone: 2
};

class Find extends React.Component {
    constructor() {
        super();

        this.state = {
            mode: mode.notSelected,
            prosList: [],
            consList: []
        }
        
        this.onProsClicked = this.onProsClicked.bind(this);
        this.onConsClicked = this.onConsClicked.bind(this);
        this.reset = this.reset.bind(this);
        this.submit = this.submit.bind(this);
    }

    async componentWillMount() {
        await this.getKeywords();
    }

    getModeName() {
        switch(this.state.mode) {
            case mode.laptop:
                return '노트북';
            case mode.phone:
                return '핸드폰';
        }
    }

    onModeSelected(mode) {
        this.setState({
            mode: mode
        });
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

    async getKeywords() {
        let keywords = await ConnectionModule.getKeywords();

        this.setState({
            prosList: keywords,
            consList: JSON.parse(JSON.stringify(keywords))
        });
    }

    async reset() {
        this.setState({
            mode: mode.notSelected,
            prosList: this.state.prosList.map((pro) => {
                return { name: pro.name };
            }),
            consList: this.state.consList.map((con) => {
                return { name: con.name };
            })
        });
    }

    submit() {
        browserHistory.push({
            pathname: '/' + (this.state.mode === mode.laptop ? 'laptop' : 'smartphone'),
            query: {
                pros: this.state.prosList.filter((pro) => {
                    return pro.selected;
                }).map((pro) => pro.name).join(','),
                cons: this.state.consList.filter((con) => {
                    return con.selected;
                }).map((con) => con.name).join(',')
            }
        })
    }

    render() {
        return (
            <div>
                <div className={css.top}>
                    <Header />
                    <div className={css.wrap}>
                        <section className={css.questions}>
                            <div className={css.inlineQuestionWrap}>
                                <h1 className={css.h1}>
                                    <span className={css.number}>1</span> 
                                    어떤 제품을 찾고 계신가요?
                                </h1>
                                <div className={css.buttonWrap}>
                                    <button
                                        className={css.button + ' ' + (this.state.mode === mode.laptop ? css.selected : '')}
                                        onClick={() => this.onModeSelected(mode.laptop)}>
                                        노트북
                                    </button>
                                    <button
                                        className={css.button + ' ' + (this.state.mode === mode.phone ? css.selected : '')}
                                        onClick={() => this.onModeSelected(mode.phone)}>
                                        핸드폰
                                    </button>
                                </div>
                            </div>
                            <ReactCSSTransitionGroup
                                                transitionName={{
                                                    enter: css.enter,
                                                    enterActive: css.enterActive
                                                }}
                                                transitionEnterTimeout={800}
                                                transitionLeave={false}>
                                {(() => {
                                    if (!(this.state.mode === mode.notSelected)) {
                                        return (
                                            <div>
                                                <div className={css.questionWrap}>
                                                    <h1 className={css.h1}>
                                                        <span className={css.number}>2</span> 
                                                        {this.getModeName()}이 가졌으면 하는 장점은 무엇인가요?
                                                    </h1>
                                                    <FeatureSelector 
                                                        features={this.state.prosList}
                                                        onFeatureClicked={this.onProsClicked} />
                                                </div>
                                                <div className={css.lastQuestionWrap}>
                                                    <h1 className={css.h1}>
                                                        <span className={css.number}>3</span> 
                                                        {this.getModeName()}이 가지지 않았으면 하는 단점은 무엇인가요?
                                                    </h1>
                                                    <FeatureSelector 
                                                        features={this.state.consList}
                                                        onFeatureClicked={this.onConsClicked} />
                                                </div>
                                                <hr className={css.hr} />
                                                <div className={css.submitWrap}>
                                                    <button
                                                        className={css.reset}
                                                        onClick={this.reset}>
                                                        다시 설정하기
                                                    </button>
                                                    <button 
                                                        className={css.submit}
                                                        onClick={this.submit}>
                                                        검색하기
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    }
                                })()}
                            </ReactCSSTransitionGroup>
                        </section>
                    </div>
                </div>
                <div>
                    더하기 소개
                </div>
                <div>
                    &copy; 2017 ~ dohagi
                </div>
            </div>
        )
    }
}

export default Find;