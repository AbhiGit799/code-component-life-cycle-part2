import { Component } from '@angular/core';

@Component({
  selector: 'app-suboffice',
  templateUrl: './suboffice.component.html',
  styleUrls: ['./suboffice.component.css']
})
export class SubofficeComponent {

  address="Civil line"

  ngOnInit()
  {

  }

  ngAfterViewInit()
  {
    console.log("SubOffice ngAfterViewInit() called.");
    
  }

  show()
  {
    console.log("Hello from SubOffice");
    
  }

}
