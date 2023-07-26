import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SubofficeComponent } from '../suboffice/suboffice.component';

@Component({
  selector: 'app-mainoffice',
  templateUrl: './mainoffice.component.html',
  styleUrls: ['./mainoffice.component.css']
})
export class MainofficeComponent {

  //For Normal Parent child we have @ViewChild
  @ViewChild(SubofficeComponent) subofficecomponent : SubofficeComponent;

  //{static:true} when we want to use in anyother method of Life cycle hook
  //This is not allowed
  @ViewChild(SubofficeComponent,{static:true}) subofficecomponent2 : SubofficeComponent;


  constructor(private cdRef : ChangeDetectorRef)
  {

  }


  ngOnInit()
  {

  }

  ngAfterContentInit()
  {
 
    // This is not allowed.
   // this.subofficecomponent.address="Prince Street";
     
  }

  ngAfterViewInit()
  {
    console.log("MainOffice ngAfterViewInit() called.");
    console.log(this.subofficecomponent.address);
    this.subofficecomponent.show();

    //while modifying we get error, but value get changed.
    //To resolve error we need to inform compiler.

    //  this.subofficecomponent.address="Prince Street";

  //  this.subofficecomponent.address="Wall Street";

    this.cdRef.detectChanges(); //This line should come after changing the value.
    
    
  }

  ngAfterViewChecked()
  {
    console.log("From MainOffice  ngAfterViewChecked()");
    
  }

  changeData()
  {
    this.subofficecomponent.address="Wall Street";

    this.cdRef.detectChanges(); 
  }

}






