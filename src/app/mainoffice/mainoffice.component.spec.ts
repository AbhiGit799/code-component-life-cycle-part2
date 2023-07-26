import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainofficeComponent } from './mainoffice.component';

describe('MainofficeComponent', () => {
  let component: MainofficeComponent;
  let fixture: ComponentFixture<MainofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
