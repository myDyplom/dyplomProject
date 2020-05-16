import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AsyncPipe} from '@angular/common';

/* NgRx */
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

/* Apps */
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {PagesModule} from './pages/pages.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {appReducers} from './store/reducers/app.reducers';
import {DevicesEffects} from './store/effects/devices.effects';
import {UploadEffects} from './store/effects/uploads.effects';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([DevicesEffects, UploadEffects]),
        HttpClientModule,
        PagesModule,
        BrowserAnimationsModule,
    ],
    providers: [AsyncPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
