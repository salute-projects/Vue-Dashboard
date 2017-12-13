import { EncounterPriority, EncounterStatus, EncounterType } from '../Enums';

export class EncountersFilterSummary {
    types: Array<EncounterType>;
    priorities: Array<EncounterPriority>;
    statuses: Array<EncounterStatus>;
    states: Array<string>;
}