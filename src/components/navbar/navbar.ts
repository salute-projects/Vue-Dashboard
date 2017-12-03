import { Component, Vue, Emit } from 'vue-property-decorator';
import { Logger } from '../../util/log';
import { debug } from 'util';
import { fail } from 'assert';
import { RxEmitter, RxSubscribe } from 'rxemitter';
import { router } from '../../router';
import EVENTS from '../../services/event-identifiers';

import './navbar.scss';

@Component({
  template: require('./navbar.html')
})
export class NavbarComponent extends Vue {

  protected logger: Logger;

  collapsed: boolean = true;

  created() {
    RxEmitter.on(EVENTS.TOGGLE_SIDEBAR.toString()).subscribe(() => {
      this.collapsed = !this.collapsed;
    });
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  redirectTo(path: string) {
    router.push(path);
  }
}
