import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FinderComponent } from './components/finder/finder.component';
import { VideogameComponent } from './components/videogame/videogame.component';
import { VideogamesComponent } from './components/videogames/videogames.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
//services
import { VideoGameServiceService } from './services/videogame/video-game-service.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FinderComponent,
    VideogameComponent,
    VideogamesComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    VideoGameServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
