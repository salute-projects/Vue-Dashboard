import { EncounterPriority, EncounterStatus, EncounterType } from '../Enums';

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

    physicianId: number | undefined;
    physicianName: string;

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
}