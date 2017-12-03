import { injectable } from "inversify";
import { WebAuth } from "auth0-js";
import { RxEmitter, rxEmit } from 'rxemitter';
import EVENT_IDENTIFIERS from "./event-identifiers";
import { router } from "../router";

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
        this.auth.authorize();
    }

    handleAuthentication () {
        this.auth.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult)
              } else if (err) {
                RxEmitter.emit(EVENT_IDENTIFIERS.LOGGED.toString(), false);
              }
        })
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        RxEmitter.emit(EVENT_IDENTIFIERS.LOGGED.toString(), false);
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    getHeaders() {
        var token = localStorage.getItem('id_token');
        if (!token.length)
            return null;
        return {
            Authorization: 'Bearer ' + token
        }
    }

    private setSession(authResult) {
        let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        RxEmitter.emit(EVENT_IDENTIFIERS.LOGGED.toString(), true);
        router.push('/home');
    }
}