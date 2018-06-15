import { NgModule } from '@angular/core';
import { FarmsComponent } from './farms/farms.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FarmersMarketComponent } from './farmers-market-component';
import { FarmDetailsComponent } from './farms/farm-details.component';
import { ErrorComponent } from './farms/error-component';
import { FarmGuard } from './farms/farm-guard';

const farmersRoutes: Routes = [
    {
        path: 'farmers-market',
        component: FarmersMarketComponent,
        children: [
            { path: 'farms', component: FarmsComponent },
            { path: 'farms/:id', component: FarmDetailsComponent, canActivate: [FarmGuard]}
        ]},
    { path: 'error', component: ErrorComponent}    
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(farmersRoutes)
    ],
    declarations: [FarmsComponent, FarmersMarketComponent, FarmDetailsComponent, ErrorComponent],
    exports: [FarmersMarketComponent],
    providers: [FarmGuard]
})

export class FarmersMarketModule {
    constructor() { }

    ngOnInit() {}
}
