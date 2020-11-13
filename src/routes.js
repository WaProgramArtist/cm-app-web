import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

// import Jobs from './components/job/job';
// import NotFound from './components/not-found';

const Routes = () => {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/">
                    <Home />
                </Route> */}
                {/* <Route exact path="/job" component={Jobs} /> */}
                {/* <Route name="NotFoundPage" component={NotFound} /> */}
                {/* <Route path='/job' component={} />
                <Route path='/aboutus' component={} />
                <Route path='/' component={} />
                <Route name='news' path='/' component={} />
                <Route name='apply' path='/' component={} />
                <Route name='NotFoundPage' component={NotFoundPage} /> */}
            </Switch>
        </Router>
    );
};

export default Routes;
