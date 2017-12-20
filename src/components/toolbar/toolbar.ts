// system
import { Component, Vue, Emit } from 'vue-property-decorator';
import { Logger } from '../../util/log';
import { debug } from 'util';
import { fail } from 'assert';
import { RxEmitter } from 'rxemitter';

// custom
import kernel from '../../services/kernel';
import SERVICES from '../../services/service-identifiers';
import EVENTS from '../../services/event-identifiers';
import { HttpClient } from '../../services/httpClient'; 
import { AuthService } from '../../services/auth';

@Component({
    template: require('./toolbar.html')
})
export class ToolbarComponent extends Vue {

    protected logger: Logger;
    private authService: AuthService;
    private httpClient: HttpClient;

    private menuOpened = false;
    private logged: boolean = false;
    
    created() {
        RxEmitter.on(EVENTS.LOGGED.toString()).subscribe((value: boolean) => {
            this.logged = value;
        });
    }

    mounted() {
        this.authService = kernel.get<AuthService>(SERVICES.AUTH);
        this.httpClient = kernel.get<HttpClient>(SERVICES.HTTP_CLIENT);
    }

    login() {
        this.authService.login();
    }

    toggleNavbar() {
        RxEmitter.emit(EVENTS.TOGGLE_SIDEBAR.toString());
    }
}
