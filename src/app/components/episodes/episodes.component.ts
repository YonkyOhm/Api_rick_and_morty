import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/interfaces/episode';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[] = [];

  constructor(
    private api: RickAndMortyApiService,
    private actived: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // let numeros: Array<string> = this.actived.snapshot.paramMap
    //   .get('range')
    //   ?.split(':') as Array<string>;
    // let nums = [];

    // for (let i = 0; i < numeros.length; i++) {
    //   nums[i] = Number(numeros[i]);
    // }

    const [n, m] = this.actived.snapshot.paramMap
      .get('range')
      ?.split(':') as Array<string>;

    this.api.getEpisodes(Number(n), Number(m)).subscribe((resp: Episode[]) => {
      this.episodes = resp;
    });
  }
}
