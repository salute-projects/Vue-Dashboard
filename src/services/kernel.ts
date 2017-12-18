import { Container } from 'inversify';
import 'reflect-metadata';
import SERVICES from './service-identifiers';
import { AuthService } from './auth';
import { HttpClient } from './httpClient';
import { Context } from './context/context';
import { EncounterApi } from './context/encounterApi';
import { HelpersService } from './helpers';
import { EncountersService } from '../components/encounters/encounters-service';
import { PatientApi } from './context/patientApi';

let kernel = new Container();

// apis
kernel.bind<Context>(SERVICES.CONTEXT).to(Context);
kernel.bind<EncounterApi>(SERVICES.ENCOUNTERS_API).to(EncounterApi);
kernel.bind<PatientApi>(SERVICES.PATIENT_API).to(PatientApi);
// services
kernel.bind<AuthService>(SERVICES.AUTH).to(AuthService);
kernel.bind<HttpClient>(SERVICES.HTTP_CLIENT).to(HttpClient);
kernel.bind<HelpersService>(SERVICES.HELPER_SERVICE).to(HelpersService);
kernel.bind<EncountersService>(SERVICES.ENCOUNTERS_SERVICE).to(EncountersService);

export default kernel;