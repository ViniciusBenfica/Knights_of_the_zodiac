import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { HoroscopeComponent } from './components/horoscope/horoscope.component';
import { KnightsComponent } from './components/knights/knights.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'horoscope/:signo', component: HoroscopeComponent},
  {path: 'knights/:knights', component: KnightsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
