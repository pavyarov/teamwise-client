import * as React from 'react';
import { plainBlock } from '@redneckz/react-bem-helper';
import { Link } from 'react-router-dom';
import { Paper, TextField, Button } from 'material-ui';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import styles from './auth-form.sass';
import { IconFieldLayout } from '../../layout';

export const AuthForm = plainBlock('auth-form', { styles })(({ className }) => (
    <div className={className}>
        <AuthFormCard>
            <div style={{ height: '100px', backgroundColor: 'gray' }} />
            <IconFieldLayout
                field={<TextField label="Login" fullWidth />}
                logo={<AccountCircle />}
            />
            <IconFieldLayout
                field={<TextField label="Password" type="password" fullWidth />}
                logo={<Lock />}
            />
            <LoginButton variant="raised" color="primary">
                Sign-In
            </LoginButton>
            <SingUpLink />
        </AuthFormCard>
    </div>
));

const AuthFormCard = AuthForm.element('login-card')(Paper);
const LoginButton = AuthForm.element('login-button')(({ className, children, ...rest }) => (
    <div className={className}>
        <Button {...rest}>{children}</Button>
    </div>
));
const SingUpLink = AuthForm.element('sign-up')(({ className }) => (
    <div className={className}>
        <span>Don&#39;t have an account?</span>
        <Link to="/register">Sign-Up</Link>
    </div>
));
