import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="hero">
      <p>About me page</p>
      <a routerLink="/about">About</a>
      <a routerLink="/">Home</a>
    </div>
  `,
  styles: [],
  imports: [RouterLink],
})
export default class AboutComponent {}
