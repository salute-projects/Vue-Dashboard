import { Component, Vue, Emit } from 'vue-property-decorator';
import { Logger } from '../../util/log';
import { debug } from 'util';
import { fail } from 'assert';
import { RxEmitter, RxSubscribe } from 'rxemitter';
import { AuthService } from "../../services/auth";
import kernel from "../../services/kernel";
import SERVICE_IDENTIFIERS from "../../services/service-identifiers";

@Component({
    template: require('./toolbar.html')
})
export class ToolbarComponent extends Vue {

    protected logger: Logger;
    private authService: AuthService;

    private menuOpened = false;

    mounted() {
        this.authService = kernel.get<AuthService>(SERVICE_IDENTIFIERS.AUTH);
    }

    login() {
        debugger;
        this.authService.login();
    }
}
