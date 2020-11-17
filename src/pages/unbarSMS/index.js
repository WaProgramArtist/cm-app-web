import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import UnbarSMS from './UnbarSMS';
import UnbarSMSHistoryLog from './UnbarSMSHistoryLog';
// import NotFound from './components/not-found';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Routes = ({match}) => {
    return (
        <Switch>
            <Route exact path={match.path} component={UnbarSMS} />
            <Route exact path={match.path + '/history-log'} component={UnbarSMSHistoryLog} />
        </Switch>
    );
};

export default Routes;