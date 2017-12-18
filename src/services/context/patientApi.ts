import { injectable, inject } from 'inversify';
import { HttpClient } from '../httpClient';
import SERVICES from '../service-identifiers';
import { PatientDetails } from '../../dto/patient/PatientDetails';

@injectable()
export class PatientApi {

    private httpClient: HttpClient; 

    constructor(@inject(SERVICES.HTTP_CLIENT) httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    private apiName = 'patient';
    private urls = {
        get: `${this.apiName}/`
    };

    getById(id: number): Promise<PatientDetails> {
        return this.httpClient.get(this.urls.get + id);
    }
}