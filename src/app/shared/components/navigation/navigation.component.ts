import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styles: [],
})
export class NavigationComponent {
  links = [
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    {
      path: '/blog',
      label: 'Blog',
    },
  ];
}
