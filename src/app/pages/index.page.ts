import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md flex flex-col items-center">
          <h1 class="md:text-4xl text-2xl font-bold">
            Welcome to the Analog Blog Starter Template
          </h1>
          <figure>
            <img src="/analog.svg" alt="AnalogJs logo" />
            <figcaption>AnalogJs: The Meta Framework</figcaption>
          </figure>
          <p class="py-6">
            This is a starter template for a blog built with AnalogJs and
            DaisyUi. AnalogJs is a framework for building web applications with
            web components.
          </p>
          <button class="btn items-center bg-base-300" routerLink="/blog">
            <a>Go to Blog Posts</a>
          </button>
        </div>
      </div>
    </div>
  `,
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
