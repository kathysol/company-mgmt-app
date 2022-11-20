import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { constants } from 'src/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    nameApp: any;
    prf:any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router : Router) {}

  async ngOnInit() {
    console.warn('acceso console',constants.NAME_APP);
    this.nameApp=constants.NAME_APP;
    this.prf=false;
  }

  goNewEnterprise() {
    this.prf=true;

  }

}
