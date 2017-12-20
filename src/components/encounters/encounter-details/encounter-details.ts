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
import { EncounterDetails, EncounterPriority, EncounterSearchRequest, EncounterStatus, EncounterType } from '../../../dto/encounter/index';
import { SearchResult } from '../../../dto/common/SearchResult';

import './encounter-details.scss';
import { SelectItem } from '../../../models/selectItem';
import { PatientDetails } from '../../../dto/patient/PatientDetails';
import { PatientDetailsSummary } from '../../../dto/patient/PatientDetailsSummary';

const patientDetailsComponent = () => import('../../../components/patient/patient-details/patient-details').then(({ PatientDetailsComponent }) => PatientDetailsComponent);

@Component({
    template: require('./encounter-details.html'),
    components: {
        patientDetails: patientDetailsComponent
    }
})
export class EncountersDetailsComponent extends Vue {
    private loading: boolean = false;
    private context: Context;
    private encounterService: EncountersService;
    private model: EncounterDetails = new EncounterDetails();
    private patientDetails: PatientDetailsSummary = new PatientDetailsSummary();

    currentId: number;
    
    private statuses: SelectItem[] = [];

    created() {
        this.context = kernel.get<Context>(SERVICES.CONTEXT);
        this.encounterService = kernel.get<EncountersService>(SERVICES.ENCOUNTERS_SERVICE);
    }

    mounted() {
        this.loading = true;
        this.currentId = parseInt(this.$route.params.id);
        this.context.encounters.getById(this.currentId).then(result => {
            this.model = result;
            this.initialize();
        }, error => {
            this.loading = false;
        });
    }
    
    initialize() {
        this.statuses = this.encounterService.getAvailableStatuses(this.model.status);
        this.context.patients.getSummary(this.model.memberId).then((result: PatientDetailsSummary) => {
            this.patientDetails = result;
            this.loading = false;
        }, error => {
        });
    }
}
