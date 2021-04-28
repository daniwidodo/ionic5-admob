import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { AdMob } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    AdMob.initialize();
  }
}
