// system
import { Component, Vue, Emit, Watch } from 'vue-property-decorator';
import { Logger } from '../../../util/log';
import { debug } from 'util';
import { fail } from 'assert';
import { injectable, inject } from 'inversify';

// service
import SERVICES from '../../../services/service-identifiers';
import kernel from '../../../services/kernel';
import { Context } from '../../../services/context/context';
import { HelpersService } from '../../../services/helpers';

// dto
import { EncounterPriority, EncounterSearchRequest, EncounterStatus, EncounterType, EncounterSummary, EncountersFilterSummary } from '../../../dto/encounter/index';
import { SearchResult } from '../../../dto/common/SearchResult';
import { Role } from "../../../dto/Enums";

import './encounters_list.scss';

@Component({
    template: require('./encounters_list.html')
})
export class EncountersListComponent extends Vue {

    private context: Context;
    private helperService: HelpersService;
    protected logger: Logger;

    private isLoading = false;
    private showFilters = false;
    private pagination: any = null;

    private filterSummary: EncountersFilterSummary;
    private searchRequest: EncounterSearchRequest;
    private dataSource = new SearchResult<EncounterSummary>();
    private headers = [
        { text: 'ID #', value: 'id', align: 'center' },
        { text: '', value: 'memberPhoto', sortable: false },
        { text: 'Patient', value: 'memberName', align: 'right' },
        { text: 'Encounter Type', value: 'typeString', align: 'center' },
        { text: 'Assignee', value: 'assignedMemberName', align: 'right' },
        { text: 'State', value: 'state', align: 'center' },
        { text: 'Priority', value: 'priorityString', align: 'center' },
        { text: 'Status', value: 'status', align: 'right' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'right' }
    ];
    
    private priorityFilter = [];
    @Watch('priorityFilter')
    priorityFilterChangeHandler() {
        this.load();
    }

    private statusFilter = [];
    @Watch('statusFilter')
    statusFilterChangeHandler() {
        this.load();
    }

    private typeFilter = [];
    @Watch('typeFilter')
    typeFilterChangeHandler() {
        this.load();
    }

    private stateFilter = [];
    @Watch('stateFilter')
    stateFilterChangeHandler() {
        this.load();
    }

    created() {
        this.context = kernel.get<Context>(SERVICES.CONTEXT);
        this.helperService = kernel.get<HelpersService>(SERVICES.HELPER_SERVICE);
        this.searchRequest = new EncounterSearchRequest();
    }

    mounted() {
        this.load();
        this.getFiltersSummary();
    }

    private getFiltersSummary() {
        this.context.encounters.getFilterSummary().then(response => {
            debugger;
            this.filterSummary = response;
        }, error => {
            debugger;
        });
    }

    private load() {
        if (this.isLoading)
            return;
        this.isLoading = true;
        this.refreshFilter();
        this.context.encounters.search(this.searchRequest).then(response => {
            this.dataSource = response;
            this.isLoading = false;
        }, error => {
            this.isLoading = false;
        });
    }

    private refreshFilter() {
        this.searchRequest.pageSize = this.pagination.rowsPerPage || 25;
        this.searchRequest.pageNumber = this.pagination.page - 1 || 0;
        this.searchRequest.stateFilter = this.stateFilter.map(state => {
            return this.helperService.getStateAbbreviation(state);
        });
        this.searchRequest.encounterTypeFilter = this.typeFilter.map((item: string) => {
            return EncounterType[item];
        });
        this.searchRequest.encounterPriorityFilter = this.priorityFilter.map((item: string) => {
            return EncounterPriority[item];
        });
        this.searchRequest.encounterStatusFilter = this.statusFilter.map((item: string) => {
            return EncounterStatus[item];
        });
    }

    encounterTypes() {
        const existingTypes = this.filterSummary && this.filterSummary ? this.filterSummary.types : [];
        var result = Object.keys(EncounterType).map(key => {
            return {
                name: key,
                isEnabled: existingTypes.indexOf(key) > -1 
            }
        }).filter(value => value.name !== 'None');
        return result;
        // if (!this.dataSource.result)
        //     return [];
        // return this.dataSource.result.map((item: EncounterSummary) => {
        //     return item.typeString;
        // });
    }

    get encounterPriorities() {
        if (!this.dataSource.result)
            return [];
        return this.dataSource.result.map((item: EncounterSummary) => {
            return item.priorityString;
        });
    }

    get encounterStatuses() {
        if (!this.dataSource.result)
            return [];
        return this.dataSource.result.map((item: EncounterSummary) => {
            return item.statusString;
        });
    }

    get encounterStates() {
        if (!this.dataSource.result)
            return [];
        return this.dataSource.result.map((item: EncounterSummary) => {
            return item.state;
        }).map(abbreviation => {
            return this.getStateFullName(abbreviation);
        });
    }

    toggleFilter() {
        this.showFilters = !this.showFilters;
    }

    getStateFullName(abbreviation: string): string {
        return this.helperService.getStateFullName(abbreviation);
    }

    @Watch('pagination', { deep: true })
    paginationHandler() {
        this.load();
    }

    getMemberPhoto(url: string) {
        return url;
    }

    getAssigneeProfileUrl(row: EncounterSummary) {
        return row.assigneeRole == Role.Physician ? '/physicians/details/' + row.assigneeId : '/members/details/' + row.assigneeId;
    }
}
