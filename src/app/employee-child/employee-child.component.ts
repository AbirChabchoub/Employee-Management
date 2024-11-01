import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css']
})
export class EmployeeChildComponent implements OnInit {
  @Input() employeeData?: Employee;
  @Input() employee?: Employee;
 
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();

  ngOnInit(): void {
    console.log(this.employee);
  }

  deleteEmployeeClicked() {
    this.onRemoveEmployee.emit(this.employee?.id);
  }

  editEmployeeClicked(){
    this.onEditEmployee.emit(this.employee?.id);
  }

}
