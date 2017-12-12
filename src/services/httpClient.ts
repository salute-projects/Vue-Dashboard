import { injectable, inject } from 'inversify';
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import SERVICES from './service-identifiers';
import { AuthService } from './auth';

@injectable()
export class HttpClient {
    private authService: AuthService;
    protected axios;

    private baseUrl = 'http://localhost:23650/api/';

    constructor( @inject(SERVICES.AUTH) authService: AuthService) {
        this.authService = authService;
        this.axios = axios;
    }

    private base<T>(url: string, method: string, data: any, withParams: boolean): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const headers = this.authService.getHeaders();
            if (!headers) {
                reject('Authorization session fail');
            }
            const args: AxiosRequestConfig = {
                method: method,
                url: this.baseUrl + url,
                headers: headers
            };
            if (data) {
                if (withParams) {
                    args.params = data;
                } else {
                    args.data = data;
                }
            }
            axios(args).then((response: AxiosResponse) => {
                resolve(response.data as T);
            }).catch((error: AxiosError) => {
                reject(error.message);
            });
        });
    }

    get<T>(url: string, params: any = null): Promise<T> {
        return this.base<T>(url, 'GET', params, true);
    }

    post<T>(url: string, data: any): Promise<T> {
        return this.base<T>(url, 'POST', data, false);
    }

    put<T>(url: string, data: any): Promise<T> {
        return this.base<T>(url, 'PUT', data, false);
    }

    delete<T>(url: string, params: any): Promise<T> {
        return this.base<T>(url, 'DELETE', params, true);
    }
}