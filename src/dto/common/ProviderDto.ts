import { Person } from "./Person";

export class ProviderDto extends Person {
    npi: string;
    speciality: string;
    degree: string;
    additionalIdentified: string;
}