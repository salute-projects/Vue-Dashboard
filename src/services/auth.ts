import { injectable } from 'inversify';
import { WebAuth } from 'auth0-js';
import { RxEmitter, rxEmit } from 'rxemitter';
import EVENTS from './event-identifiers';
import { router } from '../router';

import { UserManager, User } from "oidc-client";

const settings: any = {
    authority: 'http://localhost:9177/',
    client_id: 'admin_console',
    redirect_uri: 'http://localhost:23651/signin-auth0',
    post_logout_redirect_uri: 'http://localhost:23651/signin-auth0',
    response_type: 'id_token token',
    scope: 'openid profile'
};

@injectable()
export class AuthService {

    userManager: UserManager;

    constructor() {
        this.userManager = new UserManager(settings);
    }

    auth: WebAuth = new WebAuth({
        domain: 'safemovement.auth0.com',
        clientID: 'HCwfM68KSoLI0mfoF5KG1pU2WPQg2BXZ',
        redirectUri: 'http://localhost:23651/signin-auth0',
        audience: 'https://safemovement.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid',
    });

    login() {
        // const mgr = new UserManager(settings);
        // this.userManager.signinRedirect().then(response => {
        // }, error => {
        // });

        this.auth.authorize();
    }

    // handleAuthentication (user: User) {
    //     if (user && user.id_token) {
    //         this.setSession(user);
    //         RxEmitter.emit(EVENTS.LOGGED.toString(), true);
    //         router.push('/home');
    //     } else {
    //         RxEmitter.emit(EVENTS.LOGGED.toString(), false);
    //     }
    // }

    handleAuthentication() {
        this.auth.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
              } else if (err) {
                RxEmitter.emit(EVENTS.LOGGED.toString(), false);
              }
        });
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        RxEmitter.emit(EVENTS.LOGGED.toString(), false);
    }

    isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    getHeaders() {
        const token = localStorage.getItem('id_token');
        if (!token.length)
            return null;
        return {
            Authorization: 'Bearer ' + token
        };
    }

    private setSession(authResult) {
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        RxEmitter.emit(EVENTS.LOGGED.toString(), true);
        router.push('/home');
    }

    // private setSession(user: User) {
    //     const expiresAt = JSON.stringify(user.expires_at);
    //     localStorage.setItem('access_token', user.access_token);
    //     localStorage.setItem('id_token', user.id_token);
    //     localStorage.setItem('expires_at', expiresAt);
    // }
}