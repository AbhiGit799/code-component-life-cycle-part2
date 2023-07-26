import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit,AfterContentInit {

  sum="Total from child = 95";

  name = "Ram";

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    console.log("Child Component ngAfterContentInit()");
    
  }

  display()
  {
    console.log("Hello from Child Component");
    
  }



}
