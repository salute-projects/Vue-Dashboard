export class BaseProvider {
    profileImageUrl: string;
    profileImageFileName: string;
    country: string;
    city: string;
    state: string;
    stateLong: string;
    street: string;
    appartmentOrSuiteNumber: string;
    latitude: number;
    longitude: number;
    zip: string;
    email: string;
    fax: string;
    phone: string;
    directMessagingAddress: string;
    ein: string;
    ehrVendor: string;
    npi: string;
    dea: string;
    lastUpdated: Date | undefined;
    lastUpdatedMemberId: number | undefined;
    isActive: boolean; 
}