import { ChargeStatus, OrderPaymentType, OrderStatus } from "../Enums";
import { Appointment } from "../appointment/index";

export class Order {
    id: number;
    memberId: number;
    created: Date;
    modified: Date;
    reference: string;
    comment: string;
    facilityId: number | undefined;
    facilityVisitType: number | undefined;
    paymentId: number;
    paymentStatus: ChargeStatus;
    paymentAmount: number | undefined;
    paymentType: OrderPaymentType;
    payorName: string;
    groupNumber: string;
    insuranceId: string;
    creditCard: string;
    questionnaire: string;
    orderStatus: OrderStatus;
    fhirId: string;
    tax: number;
    testTypes: string;
    userSignatureId: number | undefined;
    relatedAppointmentId: number | undefined;
    appointment: Appointment;
    fillerOrderNumber: string;
}