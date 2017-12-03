import { injectable, inject } from 'inversify';
import { EncounterApi } from './encounterApi';
import SERVICES from '../service-identifiers';
import kernel from '../kernel';

@injectable()
export class Context {
   
    public encounters: EncounterApi;

    constructor() {
        this.encounters = kernel.get<EncounterApi>(SERVICES.ENCOUNTERS_API);
    }

}