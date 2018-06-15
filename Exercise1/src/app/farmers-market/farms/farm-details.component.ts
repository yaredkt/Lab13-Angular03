import { Component } from '@angular/core';
import { DbService } from '../../db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-farm-details',
    template: `    
    <div>
    <p>Detail Information</p>
        <strong>ID</strong>: {{farm._id}}<br />
        <strong>Name</strong>: {{farm.Farm}}<br />
        <strong>Produce</strong>: {{farm.produce}}
    </div>
  `,
    styles: []
})
export class FarmDetailsComponent {

    private farm: object;
    private id: number;

    constructor(public dbService: DbService, private route: ActivatedRoute) {
        route.params.subscribe( params => {this.id = params['id']})
        this.farm =  this.dbService.getDataById(this.id);
    }


}
