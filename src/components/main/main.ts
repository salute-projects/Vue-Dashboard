import { Component, Vue } from 'vue-property-decorator';
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

    mounted() {
    }

    toggleNavbar() {
        (this.$refs.navbar as NavbarComponent).toggleSidebar();
    }
}
