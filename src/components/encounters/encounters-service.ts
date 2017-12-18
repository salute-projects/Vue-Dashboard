import { injectable } from 'inversify';
import { start } from 'repl';
import { EncounterPriority, EncounterType, EncounterStatus } from '../../dto/encounter';
import { SelectItem } from '../../models/selectItem';
import { HelpersService } from '../../services/helpers';
import { EncounterStatusSelectItem } from "./models/EncounterStatusSelectItem";

@injectable()
export class EncountersService {

    private readonly helpersService: HelpersService = new HelpersService();

    getPrioritySelectItems(existing: Array<EncounterPriority>): Array<SelectItem> {
        const result: Array<SelectItem> = [];
        for (let n in EncounterPriority) {
            if (typeof EncounterPriority[n] === 'number' && n !== 'None') {
                const enumProperty = EncounterPriority[<string>n];
                result.push(new SelectItem(<any>EncounterPriority[n], this.getPriorityString(enumProperty), existing.indexOf(enumProperty) === -1, "", ""))
            }
        }
        return this.enabledFirst(result);
    }

    getTypeSelectItems(existing: Array<EncounterType>): Array<SelectItem> {
        const result: Array<SelectItem> = [];
        for (let n in EncounterType) {
            if (typeof EncounterType[n] === 'number' && n !== 'None') {
                const enumProperty = EncounterType[<string>n];
                result.push(new SelectItem(<any>EncounterType[n], this.getTypeString(enumProperty), existing.indexOf(enumProperty) === -1, "", ""))
            }
        }
        return this.enabledFirst(result);
    }

    getStatusSelectItems(existing: Array<EncounterStatus>): Array<SelectItem> {
        const result: Array<SelectItem> = [];
        for (let n in EncounterStatus) {
            if (typeof EncounterStatus[n] === 'number' && n !== 'None') {
                const enumProperty = EncounterStatus[<string>n];
                result.push(new SelectItem(<any>EncounterStatus[n], this.getStatusString(enumProperty), existing.indexOf(enumProperty) === -1, "", ""))
            }
        }
        return this.enabledFirst(result);
    }

    getStatesSelectItems(existing: Array<string>): Array<SelectItem> {
        const allStates = this.helpersService.getAllStates();
        const result = allStates.map(item => {
            return new SelectItem(item.abbreviation, item.name, existing.indexOf(item.abbreviation) === -1, "", "");
        })
        return this.enabledFirst(result);
    }

    private enabledFirst(list: Array<SelectItem>): Array<SelectItem> {
        return list.filter(item => !item.disabled).sort((item1, item2) => {
            return item1.title > item2.title ? 1 : -1;
        }).concat(list.filter(item => item.disabled).sort((item1, item2) => {
            return item1.title > item2.title ? 1 : -1;
        }));
    }

    private getPriorityString(priority: EncounterPriority): string {
        switch (priority) {
            case EncounterPriority.Normal:
                return 'Normal';
            case EncounterPriority.Urgent:
                return 'Urgent';
            default:
                return '';
        }
    }

    private getTypeString(type: EncounterType): string {
        switch (type) {
            case EncounterType.Counseling:
                return 'Counseling';
            case EncounterType.Diagnosis:
                return 'Diagnosis';
            case EncounterType.ImportRequest:
                return 'Import Request';
            case EncounterType.IntakeAndOrder:
                return 'Intake and Order';
            case EncounterType.SymptomFollowUp:
                return 'Symptom Follow Up';
            case EncounterType.TestFollowUp:
                return 'Test Follow Up';
            default:
                return '';
        }
    }

    private getStatusString(status: EncounterStatus): string {
        switch (status) {
            case EncounterStatus.Canceled:
                return 'Canceled';
            case EncounterStatus.Completed:
                return 'Completed';
            case EncounterStatus.CompletedAsNegative:
                return 'Completed as Negative';
            case EncounterStatus.Created:
                return 'Created';
            case EncounterStatus.DataEntryRequired:
                return 'Data Entry Required';
            case EncounterStatus.FollowUp:
                return 'Follow Up';
            case EncounterStatus.Interpretated:
                return 'Interpreted';
            case EncounterStatus.NotResponse:
                return 'No Respose';
            case EncounterStatus.PendingInterpretation:
                return 'Pending Interpretation';
            case EncounterStatus.RecordReceived:
                return 'Record Received';
            case EncounterStatus.RecordRequested:
                return 'Record Requested';
            default:
                return '';
        }
    }

    get encounterStatuses() {
        return {
            1: new SelectItem(EncounterStatus.Created, 'Encounter Created', false, 'create', 'cyan'),
            2: new SelectItem(EncounterStatus.RecordRequested, 'Record Requested', false, 'play_arrow', 'light-green'),
            3: new SelectItem(EncounterStatus.RecordReceived, 'Record Received', false, 'pause', 'orange'),
            4: new SelectItem(EncounterStatus.DataEntryRequired, 'Data Entry Required', false, 'done', 'green'),
            5: new SelectItem(EncounterStatus.PendingInterpretation, 'Pending Interpretation', false, 'cancel', 'red'),
            6: new SelectItem(EncounterStatus.Interpretated, 'Interpretated', false, 'cancel', 'red'),
            7: new SelectItem(EncounterStatus.Completed, 'Completed', false, 'cancel', 'red'),
            8: new SelectItem(EncounterStatus.Canceled, 'Canceled', false, 'cancel', 'red'),
            9: new SelectItem(EncounterStatus.CompletedAsNegative, 'Completed as Negative', false, 'cancel', 'red'),
            10: new SelectItem(EncounterStatus.FollowUp, 'Follow Up', false, 'cancel', 'red'),
            11: new SelectItem(EncounterStatus.NotResponse, 'No Response', false, 'cancel', 'red')
        };
    }

    getAvailableStatuses(status: EncounterStatus) {
        switch (status) {
            case EncounterStatus.Created:
                return [this.encounterStatuses[EncounterStatus.RecordRequested], this.encounterStatuses[EncounterStatus.Canceled]];
            case EncounterStatus.RecordRequested:
                return [this.encounterStatuses[EncounterStatus.DataEntryRequired], this.encounterStatuses[EncounterStatus.Canceled]];
            case EncounterStatus.DataEntryRequired:
                return [this.encounterStatuses[EncounterStatus.RecordRequested], this.encounterStatuses[EncounterStatus.PendingInterpretation], this.encounterStatuses[EncounterStatus.Canceled]];
            case EncounterStatus.PendingInterpretation:
                return [this.encounterStatuses[EncounterStatus.DataEntryRequired], this.encounterStatuses[EncounterStatus.Interpretated], 
                this.encounterStatuses[EncounterStatus.Completed], this.encounterStatuses[EncounterStatus.Canceled]];
            default:
                return [this.encounterStatuses[status]];
        }
    }
}