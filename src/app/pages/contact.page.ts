import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="hero min-h-screen">
      <div class="hero-content text-center text-">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Contact 22</h1>
        </div>
      </div>
    </div>
  `,
  styles: [],
  imports: [RouterLink],
})
export default class ContactComponent {}
