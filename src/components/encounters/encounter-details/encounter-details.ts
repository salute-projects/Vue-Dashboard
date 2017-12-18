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
import { EncountersService } from "../encounters-service";

// dto
import { EncounterDetails, EncounterPriority, EncounterSearchRequest, EncounterStatus, EncounterType } from '../../../dto/encounter/index';
import { SearchResult } from '../../../dto/common/SearchResult';

import './encounter-details.scss';
import { SelectItem } from '../../../models/selectItem';

const patientDetailsComponent = () => import('../../../components/patient/patient-details/patient-details').then(({ PatientDetailsComponent }) => PatientDetailsComponent);

@Component({
    template: require('./encounter-details.html'),
    components: {
        patientDetails: patientDetailsComponent
    }
})
export class EncountersDetailsComponent extends Vue {
    private context: Context;
    private encounterService: EncountersService;
    private model: EncounterDetails = new EncounterDetails();

    currentId: number;
    
    private statuses : SelectItem[] = [];

    created() {
        this.context = kernel.get<Context>(SERVICES.CONTEXT);
        this.encounterService = kernel.get<EncountersService>(SERVICES.ENCOUNTERS_SERVICE);
    }

    mounted() {
        debugger;
        this.currentId = parseInt(this.$route.params.id);
        this.context.encounters.getById(this.currentId).then(result => {
            debugger;
            this.model = result;
        }, error => {
            debugger;
        });
    }
    
    initialize() {
        this.statuses = this.encounterService.getAvailableStatuses(this.model.status);
    }
}
