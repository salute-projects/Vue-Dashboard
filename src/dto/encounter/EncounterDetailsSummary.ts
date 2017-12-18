import { EncounterType } from "../Enums";
import { EncounterStatus } from "./index";

export class EncounterDetailsSummary {
    id: number;
    type: EncounterType;
    physicianName: string;
    created: Date;
    status: EncounterStatus;
}