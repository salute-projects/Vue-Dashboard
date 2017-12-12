import { Physician } from "../physician/index";
import { Member } from "../member/index";
import { ImportRequestPriority, ImportRequestStatus, ImportRequestType, MessageMediaType } from "../Enums";
import { SafePhysicianDetails } from "../safePhysician";
import { Clinic } from "../clinic";
import { Laboratory } from "../laboratory";
import { CommunicationDetails } from "../communication";
import { ObservationDto } from "../test";

export class ImportRequestDetails {
    id: number;
    encounterId: number;
    assignMember: SafePhysicianDetails;

    memberId: number;
    memberName: string;
    memberPhoto: string;
    member: Member;

    type: ImportRequestType;
    typeString: string;

    status: ImportRequestStatus;
    statusString: string;

    priority: ImportRequestPriority;
    priorityString: string;

    clinicId: number | undefined;
    clinicName: string;
    clinic: Clinic;

    physicianId: number | undefined;
    physicianName: string;
    physician: Physician;

    laboratoryId: number | undefined;
    laboratoryName: string;
    laboratory: Laboratory;

    state: string;

    deadline: Date;
    created: Date;
    lastUpdated: Date | undefined;

    lastUpdatedMemberName: string;
    providerInformation: string;

    messageType: MessageMediaType | undefined;
    messageId: number | undefined;
    message: CommunicationDetails;
    defaultTests: ObservationDto[];

    showAssignMenu: boolean;
}