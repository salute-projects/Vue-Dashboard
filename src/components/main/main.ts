import { Component, Vue } from 'vue-property-decorator';
import { NavbarComponent } from '../navbar';
import kernel from "../../services/kernel";
import { AuthService } from "../../services/auth";
import SERVICE_IDENTIFIERS from "../../services/service-identifiers";

const navbarComponent = () => import('../../components/navbar').then(({ NavbarComponent }) => NavbarComponent);

@Component({
    template: require('./main.html'),
    components: {
        navbar: navbarComponent
    }
})
export class MainAppComponent extends Vue {
    private authService: AuthService;
    
    mounted() {
        debugger;
        // const auth = new WebAuth({
        //     domain: 'ursafe.auth0.com',
        //     clientID: 'GQQKOzfI4NpVFTT17Ja3TULYMLsnJ9Ng',
        //     redirectUri: 'http://localhost:23651/signin-auth0',
        //     audience: 'https://ursafe.auth0.com/userinfo',
        //     responseType: 'token id_token',
        //     scope: 'openid',
        // });
        this.authService = kernel.get<AuthService>( SERVICE_IDENTIFIERS.AUTH);
        this.authService.login();
        // auth.authorize();
    }

    toggleNavbar() {
        (this.$refs.navbar as NavbarComponent).toggleSidebar();
    }
}
