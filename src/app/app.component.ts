import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iframe-scroll';
  showDrawer = false;

  ngOnInit() {
    const userAgent = navigator.userAgent;
    const scrollWrapper = document.getElementsByClassName('matSidenavContent');

    if (/iPad/i.test(userAgent)) {
      scrollWrapper[0].classList.add('ipad-scrollbar-enabler');
    }

  }
}
