import { Component } from "@angular/core";
import { HeaderComponent } from "../../../shared/header/header.component";
import { TableModule } from 'primeng/table';
import { NoDataComponent } from "../../../shared/no-data/no-data.component";
import { PrimaryButtonComponent } from "../../../shared/primary-button/primary-button.component";


@Component({
    selector:"app-current-projects",
    standalone:true,
    imports: [HeaderComponent, TableModule, NoDataComponent, PrimaryButtonComponent],
    templateUrl:"./current-projects.component.html",
    styleUrl:"./current-projects.component.css"
})
export class CurrentProjectComponent{
    get isProjectPresent():boolean{
        return this.projects.length>0;
        // return false;
    }
    projects =[
        {
            name:"ASBA",
            department:"Engineering",
            teamLead:"Asmita Sedhai"
        },
        {
            name:"Express Banking",
            department:"Engineering",
            teamLead:"Suraz Dangol"
        }
    ]
}