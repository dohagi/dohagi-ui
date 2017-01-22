import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from 'views/layout';
import Find from 'views/find';
import Search from 'views/search';

class AppContainer extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Find} />
                <Route component={Layout}>
                    <Route
                        path='/smartphone'
                        component={(rest) => <Search type="smartphone" {...rest} /> } />
                    <Route
                        path='/laptop'
                        component={(rest) => <Search type="laptop" {...rest} /> } />
                </Route>
            </Router>
        );
    }
}

render(<AppContainer />, document.getElementById('dohagi'));