import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/pages/home/home.component";
import {QuemSomosComponent} from "./views/pages/quem-somos/quem-somos.component";
import {ServicosComponent} from "./views/pages/servicos/servicos.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quem-somos', component: QuemSomosComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: '**', redirectTo: 'error:403', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
