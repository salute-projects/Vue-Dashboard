export class Member {
    id: number;
    isActive: boolean;
    email: string;
    secondaryEmail: string;
    mobileNumber: string;
    workPhoneNumber: string;
    homePhoneNumber: string;
    birthDate: Date;
    gender: string;
    patiendPid: string;
    stripeCustomerId: string;
    stripeTokenId: string;
    firstName: string;
    middleName: string;
    street: string;
    apartmentOrSuiteNumber: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    avatarUrl: string;
    apnTokenString: string;
    directMessagingAddress: string;
    employer: string;
    validationCode: string;
    relationshipStatus: string;
    userSignatureId: number | undefined;
    physicianId: number | undefined;
    memberAdvancePropertyId: number | undefined;
    isPatient: boolean;
    ssn: string;
    raceOption: string;
    raceValue: string;
    preferedLanguage: string;
    primaryProvider: string;
    contactPreference: string;
}