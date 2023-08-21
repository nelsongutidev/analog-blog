import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="flex items-center flex-col">
      <h1 class="font-bold md:text-5xl text-3xl py-8">About</h1>
      <div class="mockup-code">
        <pre data-prefix="$"><code>npm create analog@latest</code></pre>

        <pre
          data-prefix=">"
          class="text-warning"
        ><code>installing...</code></pre>
        <pre data-prefix="$"><code>npm run build</code></pre>
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
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
