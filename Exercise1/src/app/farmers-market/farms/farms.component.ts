import { Component, OnInit } from '@angular/core';
import { DbService } from '../../db.service';

@Component({
    selector: 'app-farms',
    template: `    
    <ul>
        <li *ngFor = "let farm of farms">
            <a routerLink="{{farm._id}}">{{farm.Farm}}</a>
        </li>
    </ul>
  `,
    styles: []
})
export class FarmsComponent {

    farms: Array<object>;

    constructor(public dbService: DbService) {

    }

    ngOnInit() {
        this.farms = this.dbService.getData();
    }

}
