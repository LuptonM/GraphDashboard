import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideZoneChangeDetection } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';  // Ensure routes are imported

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // ✅ Handles Zone.js optimizations
    provideRouter(routes),  // ✅ Ensure `routes` is correctly imported
    provideHttpClient(),  // ✅ Required for `HttpClient`
    provideAnimations(),  // ✅ Ensure animations work (avoid async if unnecessary)
    providePrimeNG({
      theme: {
        preset: Aura, // ✅ Ensure this theme is installed & configured
      },
    }),
  ]
};
