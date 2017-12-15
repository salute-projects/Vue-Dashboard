import { injectable, inject } from 'inversify';
import { HttpClient } from '../httpClient';
import SERVICES from '../service-identifiers';
import { EncounterSearchRequest, EncounterPriority, EncounterStatus, EncounterType, EncounterDetails, EncounterSummary, EncountersFilterSummary } from '../../dto/encounter/index';
import { SearchResult } from '../../dto/common/SearchResult';

@injectable()
export class EncounterApi {

    private httpClient: HttpClient; 

    constructor(@inject(SERVICES.HTTP_CLIENT) httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    private apiName = 'encounter';
    private urls = {
        all: `${this.apiName}/all`,
        search: `${this.apiName}/searchSummary`,
        getFilterSummary: `${this.apiName}/getFilterSummary`,
        get: `${this.apiName}/`
    };

    all(): Promise<EncounterDetails[]> {
        return this.httpClient.get<EncounterDetails[]>(this.urls.all);
    }

    search(request: EncounterSearchRequest): Promise<SearchResult<EncounterSummary>> {
        return this.httpClient.post(this.urls.search, request);
    }

    getFilterSummary(): Promise<EncountersFilterSummary> {
        return this.httpClient.get(this.urls.getFilterSummary);
    }

    getById(id: number): Promise<EncounterDetails> {
        return this.httpClient.get(this.urls.get + id);
    }
}