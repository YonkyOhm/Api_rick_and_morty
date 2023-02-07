import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Character } from 'src/app/interfaces/character';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  character!: Observable<Character>;

  constructor(
    private route: ActivatedRoute,
    private api: RickAndMortyApiService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ id }) => {
      this.character = this.api.getCharacter(id);
      // this.api.getCharacter(id).subscribe(
      //   (resp) => {
      //     resp.episode = resp.episode.slice(-5).map((url) => {
      //       return url.split('/').slice(-1)[0];
      //     });
      //     this.character = resp
      //   },
      //   (err) => {}
      // );
    });
  }
}

