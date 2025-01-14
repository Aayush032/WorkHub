import { Component } from "@angular/core";
import { HeaderComponent } from "../../../shared/header/header.component";
import { NoDataComponent } from "../../../shared/no-data/no-data.component";


@Component({
    selector:"app-recent-projects",
    standalone:true,
    imports: [HeaderComponent,NoDataComponent],
    templateUrl:"./recent-updates.component.html",
    styleUrl:"./recent-updates.component.css"
})
export class RecentUpdateComponent{
    get isUpdatePresent(): boolean{
        return false;
    }
}