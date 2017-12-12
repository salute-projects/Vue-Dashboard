import { BaseProvider } from "../common/BaseProvider";

export class Laboratory extends BaseProvider {
    id: number;
    titel: string;
    name: string;
    logoFile: string;
    safePartner: boolean;
    interface: boolean;
    isGovernmentFunded: boolean | undefined;
    address1: string;
    address2: string;
    lisVendor: string;
    medicalContactId: number | undefined;
    administrativeContactId: number | undefined;
    billingContactId: number | undefined;
    paymentInfoId: number | undefined;
    providerStatusId: number | undefined;
}