import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  get cookie(): boolean {
    return this._cookie;
  }

  set cookie(value: boolean) {
    this._cookie = value;
  }

  private _cookie = true;

  constructor() {
    this.cookie = true;
  }


  ngOnInit(): void {
  }

  close($event: MouseEvent) {
    this.cookie = false;
  }
}
