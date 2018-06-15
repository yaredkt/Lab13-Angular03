import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { FarmersMarketModule, } from './farmers-market/farmers-market.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FarmersMarketModule,
        RouterModule.forRoot([
            { path: 'test', component: AppComponent }
        ])

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
