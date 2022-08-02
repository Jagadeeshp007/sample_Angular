import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name:string="jagadeesh";
  placeholder:string="Enter your name";
  num1:number=10;
  num2:number=20;
  disabled:boolean=false;
  details="";
  constructor() { }

  ngOnInit(): void {
  }
  inputValue(){
    return "Sample-app";
  }
  btnClick(){
    console.log("clicked....");
    
  }
  typeMsg(e: any) {
    this.name=e.target.value;
  }
}
