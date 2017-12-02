import { Component, Vue, Emit } from 'vue-property-decorator';
import { Logger } from '../../util/log';
import { debug } from 'util';
import { fail } from 'assert';
import { RxEmitter, RxSubscribe } from 'rxemitter';

import './navbar.scss';

@Component({
  template: require('./navbar.html')
})
export class NavbarComponent extends Vue {

  protected logger: Logger;

  collapsed : boolean = true;

  @RxSubscribe("1")
  subscribe(value:any){
  }
  
  mounted() {
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
