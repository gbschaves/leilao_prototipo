import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessDetailsAboutComponent } from './bussiness-details-about.component';

describe('BussinessDetailsAboutComponent', () => {
  let component: BussinessDetailsAboutComponent;
  let fixture: ComponentFixture<BussinessDetailsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessDetailsAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinessDetailsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
