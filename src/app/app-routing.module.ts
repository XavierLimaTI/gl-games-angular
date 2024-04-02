import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { JogosComponent } from './jogos/jogos.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path:'jogos', component: JogosComponent},
  {path:'portifolio', component: PortifolioComponent},
  {path:'contatos', component: ContatosComponent},
  {path:'', redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
