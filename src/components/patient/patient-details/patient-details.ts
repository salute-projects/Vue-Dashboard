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
import { Member } from '../../../dto/member/member';

@Component({
    template: require('./patient-details.html')
})
export class PatientDetailsComponent extends Vue {
    @Prop()
    member: Member;

    mounted() {
    }
}
