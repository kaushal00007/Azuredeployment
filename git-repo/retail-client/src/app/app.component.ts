import {ChangeDetectorRef, Component} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {HelperService} from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retail-client';

  constructor(private swUpdate: SwUpdate,
              private translate: TranslateService,
              private helperService: HelperService,
              private changeDetectorRef: ChangeDetectorRef) {

    swUpdate.available.subscribe(next => swUpdate.activateUpdate().then(() => {
      console.log('Reload for update');
      document.location.reload();
    }));
  }

}
