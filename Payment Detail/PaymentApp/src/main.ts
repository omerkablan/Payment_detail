/*import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';import { importProvidersFrom } from '@angular/core';

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
*/
/*bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule) // HttpClientModule'u buraya ekleyin
  ]
}).catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
bootstrapApplication(AppComponent, {
  providers: [

    provideHttpClient(withInterceptorsFromDi()) // provideHttpClient kullanımı
  ]
}).catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule, provideToastr } from 'ngx-toastr'; // Toastr modülünü import edin

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideToastr({ // Toastr yapılandırmasını ekleyin
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ]
}).catch(err => console.error(err));*/

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'; // Animasyonlar için gerekli provide fonksiyonu
import { provideToastr } from 'ngx-toastr'; // Toastr yapılandırması

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(), // Animasyonlar için gerekli sağlayıcı
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ]
}).catch(err => console.error(err));