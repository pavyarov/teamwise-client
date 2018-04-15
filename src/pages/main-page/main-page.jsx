// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { plainBlock } from '@redneckz/react-bem-helper';
import { AppBar, Toolbar, Typography, Button } from 'material-ui';
import styles from './main-page.sass';
import Logo from './under-construction.png';

type Props = {
    className: string,
};

export const MainPage = plainBlock('main-page', { styles })(({ className }: Props) => (
    <div className={className}>
        <AppBar position="static">
            <Toolbar>
                <Title variant="title" color="inherit">
                    Teamwise
                </Title>
                <LoginButton color="inherit">Sign-In</LoginButton>
            </Toolbar>
        </AppBar>
        <UnderConstraction />
    </div>
));

const Title = MainPage.element('title')(Typography);
const LoginButton = MainPage.element('login-button')(
    withRouter(({ history, children, ...rest }) => (
        <Button onClick={() => history.push('/login')} {...rest}>
            {children}
        </Button>
    )),
);
const UnderConstraction = MainPage.element('under-construction')(({ className }: Props) => (
    <div className={className}>
        <img src={Logo} alt="logo" />
    </div>
));
