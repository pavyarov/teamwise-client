// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page';
import { AuthForm } from './pages/auth-form';

export const App = () => (
    <div className="App">
        <Router>
            <React.Fragment>
                <Route exact path="/" component={MainPage} />
                <Route path="/login" component={AuthForm} />
            </React.Fragment>
        </Router>
    </div>
);
