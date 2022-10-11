import {Component, Input, OnInit} from '@angular/core';
import {WhatsappEnum} from './whatsapp.enum';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss'],
})
export class WhatsappComponent implements OnInit {
  @Input() type: string = WhatsappEnum.HELP;
  public info = environment.info;

  public SEND_LINK = 'https://api.whatsapp.com/send?phone=';
  public messageNumber: string = '';

  private get whatsAppNumber(): string {
    return this.info.whatsapp;
  }

  ngOnInit() {
    this.messageNumber = this.SEND_LINK + this.whatsAppNumber + '&text&type=phone_number&app_absent=0';
    this.messageNumber = this.messageNumber.replace('+', '%2B');
  }
}
