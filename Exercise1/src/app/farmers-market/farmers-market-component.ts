import { Component } from "@angular/core";

@Component({
  selector: "app-farmers-market",
  template: `  <h3>Farmers Market Component</h3>
    <a routerLink="/farmers-market/farms">Farms</a>
    <router-outlet></router-outlet>   

  `
})
export class FarmersMarketComponent {}
