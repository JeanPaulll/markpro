import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {CookiesComponent} from './cookies/cookies.component';
import {EntreContatoComponent} from './entre-contato/entre-contato.component';
import {ParceirosComponent} from './parceiros/parceiros.component';
import {HeaderComponent} from './header/header.component';
import {WhatsappComponent} from "./whatsapp/whatsapp.component";

@NgModule({
  declarations: [
    FooterComponent,
    CookiesComponent,
    EntreContatoComponent,
    ParceirosComponent,
    HeaderComponent,
    WhatsappComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    CookiesComponent,
    EntreContatoComponent,
    ParceirosComponent,
    HeaderComponent,
    WhatsappComponent
  ]
})
export class PartialsModule {
}
