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

  private _cookie = false;

  constructor() {
    this.cookie = false;
  }


  ngOnInit(): void {
  }

  close($event: MouseEvent) {
    this.cookie = false;
  }
}
