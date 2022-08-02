import { Component, createNgModule, ElementRef, QueryList, ViewChild } from '@angular/core';
import { Test1Component } from './test1/test1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  name = "sampleName...!";
  hname: string = "";

  consoleData(e: any) {
    console.log(e);

  }
  @ViewChild('heading') heading: ElementRef | null = null;
  @ViewChild('input') input: QueryList<HTMLInputElement> | null = null;

  @ViewChild('apptest1') apptest1: Test1Component | null = null;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.input);
    this.heading?.nativeElement.focus();

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('AfterViewInit', this.input);
    console.log(this.apptest1);
  }
  showTRV(h1: HTMLHeadElement, apptest1: Test1Component) {
    console.log(h1)
    console.log(apptest1.name)
    console.log(apptest1.activeBox)
    this.hname = apptest1.name;
  }
}
