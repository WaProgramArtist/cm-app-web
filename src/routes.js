import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import login from './pages/index';
import loginCenter from './pages/loginCenter/loginCenter';
import mariMobileNumber from './pages/mariMobileNumber/mariMobileNumber';
import unbarSMS from './pages/unbarSMS';
// import NotFound from './components/not-found';
import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={login} />
                <Route exact path='/login-center' component={loginCenter} />
                <Route exact path='/mari-mobile-number' component={mariMobileNumber} />
                <Route path='/unbar-sms' component={unbarSMS} />
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
