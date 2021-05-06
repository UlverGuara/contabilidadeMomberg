import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path: 'inicio', component: InicioComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: ContatoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
