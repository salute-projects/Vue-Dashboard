export class MemberInsuranceInfo {
    memberId: number;
    insurer: string;
    insuranceId: string;
    group: string;
    logoUrl: string;
    modified: Date;
    firstName: string;
    lastName: string;
    birthDate: Date;
    relationship: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    policyNumber: string;
    planCode: string;
    guarantorId: number | undefined;
}