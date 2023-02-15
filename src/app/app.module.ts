import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingModule } from "./onboarding/onboarding.module";
import { StoreModule } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OnboardingModule,
        NoopAnimationsModule,
        StoreModule.forRoot({}, {})
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
