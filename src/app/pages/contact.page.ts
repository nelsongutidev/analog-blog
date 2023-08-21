import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="flex items-center flex-col">
      <h1 class="font-bold md:text-5xl text-3xl py-8">Contact</h1>
      <div class="mockup-window border bg-base-300 md:w-3/4 w-11/12">
        <div class="flex justify-center px-4 py-16 bg-base-200">
          Analog Blog Starter Template
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
export default class ContactComponent {}
