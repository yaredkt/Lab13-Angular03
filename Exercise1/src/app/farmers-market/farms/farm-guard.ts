import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { DbService } from "../../db.service";
import { Injectable } from "@angular/core";

@Injectable()
export class FarmGuard implements CanActivate {
    constructor(private dbService: DbService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
        if (
            route.params.id == null ||
            this.dbService.getDataById(route.params.id) == null
        ) {
            this.router.navigate(["/error"]);
            return false;
        }
        return true;
    }
}
