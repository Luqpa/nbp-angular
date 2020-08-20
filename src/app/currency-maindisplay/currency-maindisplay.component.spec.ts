import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyMaindisplayComponent } from './currency-maindisplay.component';

describe('CurrencyMaindisplayComponent', () => {
  let component: CurrencyMaindisplayComponent;
  let fixture: ComponentFixture<CurrencyMaindisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyMaindisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyMaindisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
