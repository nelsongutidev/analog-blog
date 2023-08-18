import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostAttributes } from './blog/index.page';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="hero min-h-screen">
      <div class="hero-content text-center text-">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Home Page</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button routerLink="/blog" class="btn btn-primary">Blog</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
  imports: [RouterLink],
})
export default class HomeComponent {}
