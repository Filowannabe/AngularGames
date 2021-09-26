import { Component, OnInit } from '@angular/core';
import { VideoGame } from 'src/models/VideoGame';
import { ActivatedRoute } from '@angular/router';
import { VideoGameServiceService } from 'src/app/services/videogame/video-game-service.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {
  videoGames: VideoGame[] = []
  term: string = '';
  constructor(private activatedRoute: ActivatedRoute, private videoGameService: VideoGameServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this.videoGames = this.videoGameService.findVideoGames(params['term']);
      console.log(this.videoGames)
    })
  }

}
