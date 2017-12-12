export class Physician {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    title: string;
    gender: string;
    bio: string;
    primaryGroupOrPractice: string;
    dob: Date | undefined;
    mobilePhone: string;
    suffix: string;
    fullName: string;
    isSafePhysician: boolean | undefined;
    physicianCredentialId: number | undefined;
    providerStatusId: number | undefined;
    billingContactId: number | undefined;
    paymentInfoId: number | undefined;
    searchWeight: number;
    specialtiesString: string;
    isPrimary: boolean;
}