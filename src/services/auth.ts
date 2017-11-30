import { injectable } from "inversify";
import { WebAuth } from "auth0-js";

@injectable()
export class AuthService {
    auth: WebAuth = new WebAuth({
        domain: 'ursafe.auth0.com',
        clientID: 'GQQKOzfI4NpVFTT17Ja3TULYMLsnJ9Ng',
        redirectUri: 'http://localhost:23651/signin-auth0',
        audience: 'https://ursafe.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid',
    });

    login() {
        this.auth.authorize();
    }
}