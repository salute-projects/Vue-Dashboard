import { Component, Vue, Emit } from 'vue-property-decorator';
import { Logger } from '../../util/log';
import { debug } from 'util';
import { fail } from 'assert';
import { AuthService } from "../../services/auth";
import kernel from "../../services/kernel";
import SERVICE_IDENTIFIERS from "../../services/service-identifiers";

@Component({
    template: require('./callback.html')
})
export class CallbackComponent extends Vue {
    private authService: AuthService;

    mounted() {
        this.authService = kernel.get<AuthService>(SERVICE_IDENTIFIERS.AUTH);
        this.authService.handleAuthentication();
    }
}
