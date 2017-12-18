import { injectable, inject } from 'inversify';
import { EncounterApi } from './encounterApi';
import SERVICES from '../service-identifiers';
import kernel from '../kernel';
import { PatientApi } from './patientApi';

@injectable()
export class Context {
   
    public encounters: EncounterApi;
    public patients: PatientApi;

    constructor() {
        this.encounters = kernel.get<EncounterApi>(SERVICES.ENCOUNTERS_API);
        this.patients = kernel.get<PatientApi>(SERVICES.PATIENT_API);
    }

}