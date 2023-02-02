import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  
  getEpisodes(n: string, m: string) {
    //TODO validar rango

    this.router.navigate(['/episodes', `${n}:${m}`]);
  }
}
