import { injectable, inject } from 'inversify';
import { HttpClient } from '../httpClient';
import SERVICES from '../service-identifiers';
import { PatientDetails } from '../../dto/patient/PatientDetails';
import { PatientDetailsSummary } from '../../dto/patient/PatientDetailsSummary';

@injectable()
export class PatientApi {

    private httpClient: HttpClient; 

    constructor(@inject(SERVICES.HTTP_CLIENT) httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    private apiName = 'patient';
    private urls = {
        get: `${this.apiName}/`,
        getSummary: `${this.apiName}/summary/`
    };

    getById(id: number): Promise<PatientDetails> {
        return this.httpClient.get<PatientDetails>(this.urls.get + id);
    }

    getSummary(id: number): Promise<PatientDetailsSummary> {
        return this.httpClient.get<PatientDetailsSummary>(this.urls.getSummary + id);
    }
}