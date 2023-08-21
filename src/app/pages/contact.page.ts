import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact-index.html',
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
export default class ContactComponent {}
