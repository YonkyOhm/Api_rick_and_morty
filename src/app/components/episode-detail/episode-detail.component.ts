import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { Episode } from 'src/app/interfaces/episode';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css'],
})
export class EpisodeDetailComponent implements OnInit {
  @Input() detail: Episode | null;

  characters: Character[] = [];

  constructor(private router: Router, private api: RickAndMortyApiService) {
    this.detail = null;
  }
  ngOnInit(): void {
    //this.characters = this.detail?.characters as string[];

    // for(let i=0; i < this.characters.length; i++){

    //   let urlnew = this.characters[i].split('/');

    //   let id = Number(urlnew[urlnew.length - 1])

    // }
    this.detail?.characters
      .map((url) => {
        let urlParts = url.split('/');
        return Number(urlParts[urlParts.length - 1]);
      })
      .filter((id) => id >= 6)
      .slice(0, 3)
      .map((id) => {
        this.api.getCharacter(id).subscribe(
          (resp: Character) => {
            this.characters.push(resp);
          },
          (err) => {
            console.error(err);
          }
        );
      });
  }

  getCharacter(id: number) {
    this.router.navigate(['/character', id]);
  }
}
