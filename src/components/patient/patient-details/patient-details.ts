// system
import { Component, Vue, Emit, Watch, Prop } from 'vue-property-decorator';
import { Logger } from '../../../util/log';
import { debug } from 'util';
import { fail } from 'assert';
import { injectable, inject } from 'inversify';

// dto
import { EncounterDetails, EncounterPriority, EncounterSearchRequest, EncounterStatus, EncounterType } from '../../../dto/encounter/index';
import { SearchResult } from '../../../dto/common/SearchResult';

import './patient-details.scss';
import { PatientDetailsSummary } from '../../../dto/patient/PatientDetailsSummary';
import { HelpersService } from '../../../services/helpers';

import SERVICES from '../../../services/service-identifiers';
import kernel from '../../../services/kernel';
import { Context } from '../../../services/context/context';
import { SelectItem } from '../../../models/selectItem';

@Component({
    template: require('./patient-details.html')
})
export class PatientDetailsComponent extends Vue {
    @Prop({ default: new PatientDetailsSummary() })
    patientInfo: any;

    private butler: HelpersService;
    private genders: Array<string> = [];

    private viewState = {
        editProfile: false,
        birthDateModelOpened: false
    }

    created() {
        this.butler = kernel.get<HelpersService>(SERVICES.HELPER_SERVICE);
    }

    mounted() {
        this.genders = this.butler.genders;
    }
}
