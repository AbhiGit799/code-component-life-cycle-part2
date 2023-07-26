import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubofficeComponent } from './suboffice.component';

describe('SubofficeComponent', () => {
  let component: SubofficeComponent;
  let fixture: ComponentFixture<SubofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
