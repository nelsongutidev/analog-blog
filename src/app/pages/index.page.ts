import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <h1>Home</h1>
      <p>this is the home page</p>
      <a routerLink="/about">About</a>
      <a routerLink="/">Home</a>
    </div>
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
  imports: [RouterLink],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
