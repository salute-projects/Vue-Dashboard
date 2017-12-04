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
    auth: WebAuth = new WebAuth({
        domain: 'safemovement.auth0.com',
        clientID: 'HCwfM68KSoLI0mfoF5KG1pU2WPQg2BXZ',
        redirectUri: 'http://localhost:23651/signin-auth0',
        audience: 'https://safemovement.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid',
    });

    login() {
        debugger;
        const mgr = new UserManager(settings);
        mgr.signinRedirect().then(response => {
            debugger;
        }, error => {
            debugger;
        });

        //this.auth.authorize();
    }

    handleAuthentication () {
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
}