import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit, OnChanges {

  constructor() { }
 
  @Input() name = "Jagadeesh";
  @Output() someChaged = new EventEmitter();
  
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("this comp is created");
  }

  btnClicked(){
    console.log("button cliked")
    this.someChaged.emit("btn cliked");
  }
}
