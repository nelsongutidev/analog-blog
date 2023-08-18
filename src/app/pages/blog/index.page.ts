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
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', 'posts', post.slug]">{{
          post.attributes.title
        }}</a>
      </li>
    </ul>
  `,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/blog')
  );

  ngOnInit() {
    console.log('this.posts: ', this.posts);
  }
}
