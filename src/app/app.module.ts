import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {APP_PUBLIC_API_TOKEN, APP_SERVER_CONFIG} from './app.config';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing.routes';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    FormsModule
  ],
  providers: [{provide: APP_PUBLIC_API_TOKEN, useValue: APP_SERVER_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
