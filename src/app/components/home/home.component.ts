import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  getEpisodes(n: string | number, m: string | number) {
    n = Number(n);
    m = Number(m);

    if (!Number.isNaN(n) && n > 0 && !Number.isNaN(m) && m > 0) {
      if (n > m) {
        [n, m] = [m, n];
      }

      this.router.navigate(['/episodes', `${n}:${m}`]);
    } else {
      alert('Rango no valido');
    }
  }
}
