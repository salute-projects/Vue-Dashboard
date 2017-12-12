import { AppointmentStatus } from "../Enums";

export class Appointment {
    id: number;
    memberId: number;
    patientId: string;
    confirmationId: string;
    appointmentStart: Date;
    appointmentEnd: Date;
    locationCode: string;
    locationId: string;
    locationName: string;
    timeZone: string;
    createdDate: Date;
    status: AppointmentStatus;
}