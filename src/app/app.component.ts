import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  template: `
    <app-navigation />
    <div class="min-h-screen bg-base-100">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    // `
    //   :host {
    //     max-width: 1280px;
    //     margin: 0 auto;
    //     padding: 2rem;
    //     text-align: center;
    //   }
    // `,
  ],
})
export class AppComponent {}
