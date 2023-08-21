import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './index.html',
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
      }
    `,
  ],
  imports: [RouterLink],
})
export default class HomeComponent {}
