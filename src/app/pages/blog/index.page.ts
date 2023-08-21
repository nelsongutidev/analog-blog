import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor],
  template: `
    <div class="bg-base-100 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="font-bold md:text-5xl text-3xl tracking-tigh">
            From the blog
          </h2>
          <p class="mt-2 text-lg leading-8">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div
          class="mt-10 border-t border-gray-200 flex gap-4 pt-10 flex-wrap gap-y-8"
        >
          <div
            *ngFor="let post of posts"
            class="card w-96 bg-base-200 shadow-xl"
          >
            <div class="card-body">
              <a
                [routerLink]="['/blog', 'posts', post.slug]"
                class="hover:underline"
              >
                <h2 class="card-title">{{ post?.attributes?.title }}</h2></a
              >
              <p>{{ post?.attributes?.description }}</p>
              <div class="card-actions justify-end">
                <div class="relative mt-8 flex items-center gap-x-4">
                  <img
                    [src]="post?.attributes?.coverImage"
                    alt=""
                    class="object-cover h-12 w-12 rounded-full"
                  />
                  <div class="text-sm leading-6">
                    <p class="font-semibold">
                      <span class="absolute inset-0"></span>
                      {{ post?.attributes?.author || 'Nelson Gutierrez' }}
                    </p>
                    <p>
                      {{ post?.attributes?.authorInfo || 'Angular Developer' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/blog')
  );
}
