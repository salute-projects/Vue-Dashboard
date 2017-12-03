import { Component, Vue, Emit } from 'vue-property-decorator';
import { Logger } from '../../util/log';
import { debug } from 'util';
import { fail } from 'assert';
import { RxEmitter, RxSubscribe } from 'rxemitter';
import { AuthService } from "../../services/auth";
import kernel from "../../services/kernel";
import SERVICE_IDENTIFIERS from "../../services/service-identifiers";
import EVENT_IDENTIFIERS from "../../services/event-identifiers";
import { HttpClient } from "../../services/httpClient"; 

@Component({
    template: require('./toolbar.html')
})
export class ToolbarComponent extends Vue {

    protected logger: Logger;
    private authService: AuthService;
    private httpClient: HttpClient;

    private menuOpened = false;
    private logged : boolean = false;
    
    created() {
        RxEmitter.on(EVENT_IDENTIFIERS.LOGGED.toString()).subscribe((value : boolean) => {
            this.logged = value;
            this.httpClient.get<any>('member/info').then(response => {
                debugger;
                var memberInfo = response;
            });
        })
    }

    mounted() {
        this.authService = kernel.get<AuthService>(SERVICE_IDENTIFIERS.AUTH);
        this.httpClient = kernel.get<HttpClient>(SERVICE_IDENTIFIERS.HTTP_CLIENT);
    }

    login() {
        this.authService.login();
    }
}
