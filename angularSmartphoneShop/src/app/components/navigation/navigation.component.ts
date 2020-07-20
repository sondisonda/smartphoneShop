import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

private loginMode = true;



  constructor( private _translate: TranslateService
    ) {  }

  ngOnInit() {
  }


  login() {
    this.loginMode = true;
  }


  logout() {
    this.loginMode = false;

  }


}
