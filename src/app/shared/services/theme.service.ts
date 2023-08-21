import { Injectable, effect, inject, signal } from '@angular/core';

export const DATA_KEY = 'analog-blog-theme';
export const THEMES = ['light', 'dark', 'cupcake'];
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  selectedTheme = signal('light');
}
