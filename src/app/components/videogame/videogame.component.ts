import { Component, OnInit } from '@angular/core';
import { VideoGameServiceService } from 'src/app/services/videogame/video-game-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css']
})
export class VideogameComponent implements OnInit {
  videoGame: any = {};
  constructor(private videoGameService: VideoGameServiceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.videoGame = this.videoGameService.getVideoGame(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
