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
import { EncountersService } from '../encounters-service';

// dto
import { EncounterPriority, EncounterSearchRequest, EncounterStatus, EncounterType, EncounterSummary, EncountersFilterSummary } from '../../../dto/encounter/index';
import { SearchResult } from '../../../dto/common/SearchResult';
import { Role } from '../../../dto/Enums';
import { SelectItem } from '../../../models/selectItem';

import './encounters_list.scss';

@Component({
    template: require('./encounters_list.html')
})
export class EncountersListComponent extends Vue {

    private context: Context;
    private helperService: HelpersService;
    private encounterService: EncountersService;
    protected logger: Logger;

    private isLoading = false;
    private showFilters = false;
    private pagination: any = null;

    private filterSummary: EncountersFilterSummary;
    private priorityFilterSource: Array<SelectItem> = [];
    private typeFilterSource: Array<SelectItem> = [];
    private statusFilterSource: Array<SelectItem> = [];
    private statesFilterSource: Array<SelectItem> = [];
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

    private search = '';
    @Watch('search')
    searchHandler() {
        this.helperService.debounce(this.load(), 500);
    }

    created() {
        this.context = kernel.get<Context>(SERVICES.CONTEXT);
        this.helperService = kernel.get<HelpersService>(SERVICES.HELPER_SERVICE);
        this.encounterService = kernel.get<EncountersService>(SERVICES.ENCOUNTERS_SERVICE);
        this.searchRequest = new EncounterSearchRequest();
    }

    mounted() {
        this.load();
        this.getFiltersSummary();
    }

    private getFiltersSummary() {
        this.context.encounters.getFilterSummary().then(response => {
            this.filterSummary = response;
            this.priorityFilterSource = this.encounterService.getPrioritySelectItems(this.filterSummary.priorities);
            this.typeFilterSource = this.encounterService.getTypeSelectItems(this.filterSummary.types);
            this.statusFilterSource = this.encounterService.getStatusSelectItems(this.filterSummary.statuses);
            this.statesFilterSource = this.encounterService.getStatesSelectItems(this.filterSummary.states); 
        }, error => {
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
        this.searchRequest.term = this.search;
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
        return url ? url : '/assets/img/unknown-user.jpg';
    }

    getAssigneeProfileUrl(row: EncounterSummary) {
        return row.assigneeRole === Role.Physician ? '/physicians/details/' + row.assigneeId : '/members/details/' + row.assigneeId;
    }
}
