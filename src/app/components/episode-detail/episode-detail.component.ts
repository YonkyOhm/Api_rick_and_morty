import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent {

  characters = [1,2,3]

  constructor(private router: Router){

  }

  getCharacter(id: number){
    this.router.navigate(['/character', id ])
  }
}
