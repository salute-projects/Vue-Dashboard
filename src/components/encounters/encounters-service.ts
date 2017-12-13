import { injectable } from 'inversify';
import { start } from 'repl';
import { EncounterPriority, EncounterType, EncounterStatus } from '../../dto/encounter';
import { SelectItem } from '../../models/selectItem';
import { HelpersService } from '../../services/helpers';

@injectable()
export class EncountersService {

    private readonly helpersService: HelpersService = new HelpersService();

    getPrioritySelectItems(existing: Array<EncounterPriority>) : Array<SelectItem> {
        const result : Array<SelectItem> = [];
        for(let n in EncounterPriority) {
            if (typeof EncounterPriority[n] === 'number' && n !== 'None') {
                const enumProperty = EncounterPriority[<string>n];
                result.push(new SelectItem(<any>EncounterPriority[n], this.getPriorityString(enumProperty), existing.indexOf(enumProperty) === -1))
            }
        }
        return this.enabledFirst(result);
    } 

    getTypeSelectItems(existing: Array<EncounterType>) : Array<SelectItem> {
        const result : Array<SelectItem> = [];
        for(let n in EncounterType) {
            if (typeof EncounterType[n] === 'number' && n !== 'None') {
                const enumProperty = EncounterType[<string>n];
                result.push(new SelectItem(<any>EncounterType[n], this.getTypeString(enumProperty), existing.indexOf(enumProperty) === -1))
            }
        }
        return this.enabledFirst(result);
    }

    getStatusSelectItems(existing: Array<EncounterStatus>) : Array<SelectItem> {
        const result : Array<SelectItem> = [];
        for(let n in EncounterStatus) {
            if (typeof EncounterStatus[n] === 'number' && n !== 'None') {
                const enumProperty = EncounterStatus[<string>n];
                result.push(new SelectItem(<any>EncounterStatus[n], this.getStatusString(enumProperty), existing.indexOf(enumProperty) === -1))
            }
        }
        return this.enabledFirst(result);
    }

    getStatesSelectItems(existing: Array<string>) : Array<SelectItem> {
        const allStates = this.helpersService.getAllStates();
        const result = allStates.map(item => {
            return new SelectItem(item.abbreviation, item.name, existing.indexOf(item.abbreviation) === -1);
        })
        return this.enabledFirst(result);
    }

    private enabledFirst(list: Array<SelectItem>) : Array<SelectItem> {
        return list.filter(item => !item.disabled).sort((item1, item2) => {
            return item1.name > item2.name ? 1 : -1;
        }).concat(list.filter(item => item.disabled).sort((item1, item2) => {
            return item1.name > item2.name ? 1 : -1;
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
}