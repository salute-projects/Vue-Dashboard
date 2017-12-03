import { injectable, inject } from "inversify";
import axios, { AxiosResponse } from 'axios';
import SERVICE_IDENTIFIERS from "./service-identifiers";
import { AuthService } from "./auth";

@injectable()
export class HttpClient {
    private authService: AuthService;
    protected axios;

    private baseUrl = "http://stage.ursafe.io/api/"

    constructor( @inject(SERVICE_IDENTIFIERS.AUTH) authService: AuthService) {
        this.authService = authService;
        this.axios = axios;
    }

    get<T>(url: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            debugger;
            var headers = this.authService.getHeaders();
            if (!headers) {
                reject('Authorization session fail');
            }
            axios({
                method: 'GET',
                url: this.baseUrl + url,
                headers: headers
            }).then((response: AxiosResponse) => {
                debugger;
                resolve(response.data as T);
            }).catch(error => {
                debugger;
                reject(error);
            });
        });
    }
}