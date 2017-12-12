import { EncounterPriority, EncounterStatus, EncounterType, Role } from "../Enums";

export class EncounterSummary {
    id: number;
    memberId: number;
    memberName: number;
    memberPhoto: number;
    type: EncounterType;
    typeString: string;
    status: EncounterStatus;
    statusString: string;
    priority: EncounterPriority;
    priorityString: string;
    assigneeRole: Role;
    assigneeName: string;
    assigneeId: number;
    created: Date;
    state: string; 
}