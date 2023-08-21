import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about-index.html',
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
        flex-direction: column;
      }
    `,
  ],
  imports: [RouterLink],
})
export default class AboutComponent {}
