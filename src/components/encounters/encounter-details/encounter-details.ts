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
import { EncounterDetails, EncounterPriority, EncounterSearchRequest, EncounterStatus, EncounterType } from '../../../dto/encounter/index';
import { SearchResult } from '../../../dto/common/SearchResult';

import './encounter-details.scss';

@Component({
    template: require('./encounter-details.html')
})
export class EncountersDetailsComponent extends Vue {
    private context: Context;
    private model: EncounterDetails;

    currentId: number;
    
    private availableStatuses = ["1", "2", "3"]

    created() {
        this.context = kernel.get<Context>(SERVICES.CONTEXT);
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
    
}
