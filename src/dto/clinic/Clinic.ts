import { BaseProvider } from "../common/BaseProvider";

export class Clinic extends BaseProvider {
    id: number;
    titel: string;
    isGovernmentFunded: boolean;
    primaryMedicalGroup: string;
    
    medicalGroupId: number | undefined;
    providerStatusId: number| undefined;
    medicalContactId: number | undefined;
    administrativeContactId: number | undefined;
    searchWeight: number;
}