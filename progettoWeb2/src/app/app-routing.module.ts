import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { SupportoComponent } from './componenti/supporto/supporto.component';
import { ChiSiamoComponent } from './componenti/chi-siamo/chi-siamo.component';
import { PrivacyComponent } from './componenti/privacy/privacy.component';
import { LoginComponent } from './componenti/login/login.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { ProfiloComponent } from './componenti/profilo/profilo.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'supporto', component: SupportoComponent},
    {path: 'chi-siamo', component: ChiSiamoComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrazione', component: RegistrazioneComponent},
    {path: 'profilo', component: ProfiloComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
