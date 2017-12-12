import { EncounterPriority, EncounterStatus, EncounterType } from '../Enums';
import { Member } from "../member/index";
import { Physician } from "../physician/index";
import { OrderDetails } from "../order/index";
import { ImportRequestDetails } from "../importRequests";

export class EncounterDetails {
    id: number;
    memberId: number;
    memberName: string;
    memberPhoto: string;

    type: EncounterType;
    typeString: string;

    status: EncounterStatus;
    statusString: string;

    priority: EncounterPriority;
    priorityString: string;

    assignedMemberId: number | undefined;
    assignedMemberName: string;
    assignedMember: Member;

    physicianId: number | undefined;
    physicianName: string;
    physician: Physician;

    clinicId: number | undefined;
    clinicName: string;

    medicalGroupId: number | undefined;
    medicalGroupName: string;

    state: string;

    deadline: Date;
    created: Date;
    lastUpdated: Date | undefined;
    lastUpdatedMemberName: string;

    entityId: number;

    order: OrderDetails;
    importRequest: ImportRequestDetails;
}