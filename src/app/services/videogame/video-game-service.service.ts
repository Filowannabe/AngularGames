import { Injectable } from '@angular/core';
import { VideoGame } from 'src/models/VideoGame';

@Injectable({
  providedIn: 'root'
})

export class VideoGameServiceService {
  private videoGames: VideoGame[] = [{
    name: 'Fortnite',
    description: `Fortnite is a survival game where 100 players 
    fight against each other in player versus player combat to be the last one standing.
    It is a fast-paced, action-packed game,not unlike The Hunger Games,
    where strategic thinking is a must in order to survive.`,
    img: '../../../assets/fortnite.jpg',
    release: '2017',
    console: 'XBOX'
  },
  {
    name: 'God of war',
    description: `God of War (also known as God of War IV) is the sequel to God of War III
      as well as a continuation of the canon God of War chronology. ... Unlike previous installments,
      this game focuses on Norse mythology and follows an older and more seasoned Kratos and his new son
      Atreus in the years since God of War III.`,
    img: '../../../assets/gow.jpg',
    release: '2017',
    console: 'PS4'
  },
  {
    name: 'TLoU2',
    description: `The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog
      and published by Sony Interactive Entertainment for the PlayStation 4.Set five years after 
      The Last of Us (2013), the game focuses on two playable characters in a post-apocalyptic
      United States whose lives intertwine: Ellie, who sets out for revenge after
      suffering a tragedy, and Abby, a soldier who becomes involved in a conflict between her militia
      and a religious cult. The game is played from the third-person perspective and allows the player
      to fight human enemies and cannibalistic zombie-like creatures with firearms, improvised weapons,
      and stealth.`,
    img: '../../../assets/tlo2.webp',
    release: '2017',
    console: 'PS4'
  },
  {
    name: 'Rayman Legends',
    description: `Gameplay. The game carries on the style of gameplay from Rayman Origins
      in which up to four players (depending on the format) simultaneously make their way through
      various levels. Lums can be collected by touching them, defeating enemies, or freeing captured
      Teensies.`,
    img: '../../../assets/rayman.webp',
    release: '2017',
    console: 'XBOX'
  },
  {
    name: 'Uncharted 4',
    description: `Retired from fortune-hunting, Drake is suddenly forced back into the world of thieves.
      With the stakes much more personal, he embarks on a globe-trotting journey in pursuit of a historical
      conspiracy behind a fabled pirate treasure.`,
    img: '../../../assets/uncharted4.jpeg',
    release: '2017',
    console: 'PS4'
  },
  {
    name: 'Halo Infinite',
    description: `Halo Infinite is a first-person shooter game developed by 343 Industries and 
    published by Xbox Game Studios for Microsoft Windows,Xbox One, and Xbox Series X and Series S. ... 
    Unlike previous installments in the series, the multiplayer portion of the game will be free-to-play.`,
    img: '../../../assets/haloinfinite.webp',
    release: '2017',
    console: 'XBOX'
  }
  ]
  constructor() {
    console.log('Service is ready to be used');
  }
  getVideoGames(): any {
    return this.videoGames;
  }

  getVideoGame(i: number): any {
    return this.videoGames[i];
  }

  findVideoGames(term: string): any {
    let videoGamesArray: VideoGame[] = []
    term = term.toLowerCase()

    this.videoGames.forEach(it => {
      let name = it.name.toLowerCase();
      console.log(name.indexOf(term))
      if (name.indexOf(term) >= 0) videoGamesArray.push(it)
    });

    return videoGamesArray;
  }
}
