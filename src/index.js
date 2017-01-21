import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from 'views/layout';
import Find from 'views/find';

class AppContainer extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Layout}>
                    <IndexRoute component={Find} />
                </Route>
            </Router>
        );
    }
}

render(<AppContainer />, document.getElementById('dohagi'));