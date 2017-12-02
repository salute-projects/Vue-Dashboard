import { Component, Vue } from 'vue-property-decorator';
import kernel from "../../services/kernel";
import { AuthService } from "../../services/auth";
import SERVICE_IDENTIFIERS from "../../services/service-identifiers";
import { debug } from 'util';
import { RxEmitter, rxEmit } from 'rxemitter';

import { NavbarComponent } from '../navbar';
import { ToolbarComponent } from '../toolbar';

const navbarComponent = () => import('../../components/navbar').then(({ NavbarComponent }) => NavbarComponent);
const toolbarComponent = () => import('../../components/toolbar').then(({ ToolbarComponent }) => ToolbarComponent); 

@Component({
    template: require('./main.html'),
    components: {
        navbar: navbarComponent,
        toolbar: toolbarComponent
    }
})
export class MainAppComponent extends Vue {
    private authService: AuthService;

    mounted() {
        this.authService = kernel.get<AuthService>(SERVICE_IDENTIFIERS.AUTH);
        RxEmitter.emit('1', 'test');
        // this.authService.login();
    }

    toggleNavbar() {
        (this.$refs.navbar as NavbarComponent).toggleSidebar();
    }
}
