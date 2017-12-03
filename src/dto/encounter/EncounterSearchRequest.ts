import { SearchRequest } from '../common/SearchRequest';
import { PageRequest } from '../common/PageRequest';
import { EncounterType } from '../Enums';
import { EncounterPriority } from '../Enums';
import { EncounterStatus } from '../Enums';

export class EncounterSearchRequest extends SearchRequest {
    constructor() {
        super();
        this.orderAsc = true;
        this.orderByCreated = true;
        this.orderByPatientName = false;
        this.orderByEncounterType = false;
        this.orderByDeadline = false;
        this.orderByPriority = false;
        this.orderByStatus = false;
        this.orderByState = false;
        this.stateFilter = [];
        this.encounterTypeFilter = [];
        this.encounterStatusFilter = [];
        this.encounterPriorityFilter = [];
        this.term = '';
        this.city = '';
        this.state = '';
        this.pageNumber = 1;
        this.pageSize = 25;
    }

    orderAsc: boolean;
    orderByCreated: boolean;
    orderByPatientName: boolean;
    orderByEncounterType: boolean;
    orderByPhysicianName: boolean;
    orderByDeadline: boolean;
    orderByPriority: boolean;
    orderByStatus: boolean;
    orderByState: boolean;

    stateFilter: string[];

    encounterTypeFilter: EncounterType[];
    encounterPriorityFilter: EncounterPriority[];
    encounterStatusFilter: EncounterStatus[]; 
}