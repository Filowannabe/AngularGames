import { Component, OnInit } from '@angular/core';
import { VideoGame } from 'src/models/VideoGame';
import { VideoGameServiceService } from 'src/app/services/videogame/video-game-service.service';
import { Router } from '@angular/router';
import { generateModal } from './utils/generateModal';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css', './modal.css']
})
export class VideogamesComponent implements OnInit {
  videoGames: VideoGame[] = [];

  constructor(private videoGameService: VideoGameServiceService,
    private router: Router, private auth:AuthService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) this.router.navigateByUrl('login')
    this.auth.setAuthNavBar()
    this.videoGames = this.videoGameService.getVideoGames();
  }
  goVideoGame(i: number) {
    this.router.navigate(['/videogame/', i])
  }

  async showModal(videoGame: any, modal = (document.querySelector('.myModal') as HTMLFormElement)) {
    generateModal(videoGame, modal);
  }
}
