import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterContentInit{

  //In case of Content Projection we have @ContentChild decorator
  @ContentChild(ChildComponent) childComponent:ChildComponent;


  //Below code is not recommended. It will remove.
  //If we want to access in ngOnInit() ; Restriction only for lifecycle hook.
  @ContentChild(ChildComponent,{static:true}) childComponent2:ChildComponent;


  ngOnInit()
  {
    //Below code is not recommeded.
    // console.log(this.childComponent.sum);
    // this.childComponent.display();
  }

  ngAfterContentInit()
  {
     console.log("Parent component   ngAfterContentInit()");
     console.log(this.childComponent.sum);
     this.childComponent.display();
     
  }

  getData()
  {
    console.log("Parent component getData()   ngAfterContentInit()");
    console.log(this.childComponent.sum);
    this.childComponent.display();
  }


  ngAfterContentChecked()
  {
    //whenever values changes ngAfterContentChecked() fires

    console.log("From Parent component ngAfterContentChecked()");
    
  }

  changeData()
  {
    this.childComponent.name = "Karan";
  }
}








