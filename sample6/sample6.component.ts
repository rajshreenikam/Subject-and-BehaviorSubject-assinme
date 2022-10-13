import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-sample6',
  templateUrl: './sample6.component.html',
  styleUrls: ['./sample6.component.css']
})
export class Sample6Component implements OnInit {

  
  empDetails={
    empName: '',
    empEmail:'',
    empCompany:'',
    empContact:''
  }
 
 
 
  constructor(private _demo: DemoService) {
    this._demo.empName.subscribe(res=>{
      this.empDetails.empName=res;
    })
    this._demo.empEmail.subscribe(res=>{
      this.empDetails.empEmail=res;
    })
    this._demo.empCompany.subscribe(res=>{
      this.empDetails.empCompany=res;
    })
    this._demo.empContact.subscribe(res=>{
      this.empDetails.empContact=res;
    })
 
 
  }
 
  ngOnInit() {
  }
 
  updateEmpDetails(empname, email, companyname, empcontactno){
    this._demo.empName.next(empname.value);
    this._demo.empEmail.next(email.value);
    this._demo.empCompany.next(companyname.value);
    this._demo.empContact.next(empcontactno.value);
 
  }
 

}
