import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="flex items-center flex-col">
      <h1 class="font-bold md:text-5xl text-3xl py-8">About</h1>
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1 text-center">
            This is the About Page using an awesome phone component from DaisyUI
          </div>
        </div>
      </div>
    </section>
  `,
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
