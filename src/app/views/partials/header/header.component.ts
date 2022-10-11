import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {WhatsappEnum} from "../whatsapp/whatsapp.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() type: string = WhatsappEnum.HELP;
  public info = environment.info;

  public SEND_LINK = 'https://api.whatsapp.com/send?phone=';
  public messageNumber: string = '';

  private get whatsAppNumber(): string {
    return this.info.whatsapp;
  }


  constructor() { }

  ngOnInit(): void {
    this.messageNumber = this.SEND_LINK + this.whatsAppNumber + '&text&type=phone_number&app_absent=0';
    this.messageNumber = this.messageNumber.replace('+', '%2B');
  }

}
