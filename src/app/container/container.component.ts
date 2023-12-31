import { AfterContentInit, Component, ContentChild, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log(this.employee)

    this.employee.empName = 'Rick'
    // changing employee name
  }

 @ContentChild(EmployeeComponent) employee !: EmployeeComponent
  

}
