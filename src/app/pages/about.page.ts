import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">About Page</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
  imports: [RouterLink],
})
export default class AboutComponent {}
