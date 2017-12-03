import { Container } from 'inversify';
import 'reflect-metadata';
import SERVICES from './service-identifiers';
import { AuthService } from './auth';
import { HttpClient } from './httpClient';
import { Context } from './context/context';
import { EncounterApi } from './context/encounterApi';
import { HelpersService } from './helpers';

let kernel = new Container();

kernel.bind<AuthService>(SERVICES.AUTH).to(AuthService);
kernel.bind<HttpClient>(SERVICES.HTTP_CLIENT).to(HttpClient);
kernel.bind<Context>(SERVICES.CONTEXT).to(Context);
kernel.bind<EncounterApi>(SERVICES.ENCOUNTERS_API).to(EncounterApi);
kernel.bind<HelpersService>(SERVICES.HELPER_SERVICE).to(HelpersService);

export default kernel;