import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-entre-contato',
  templateUrl: './entre-contato.component.html',
  styleUrls: ['./entre-contato.component.scss']
})
export class EntreContatoComponent implements OnInit {

  public info = environment.info;

  constructor() { }

  ngOnInit(): void {
  }

}
