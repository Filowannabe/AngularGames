import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogameComponent } from './components/videogame/videogame.component';
import { VideogamesComponent } from './components/videogames/videogames.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FinderComponent } from './components/finder/finder.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'videogame/:id', component: VideogameComponent },
  { path: 'videogames', component: VideogamesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'find/:term', component: FinderComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
