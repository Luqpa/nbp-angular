import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyQuerynotificationboxComponent } from './currency-querynotificationbox.component';

describe('CurrencyQuerynotificationboxComponent', () => {
  let component: CurrencyQuerynotificationboxComponent;
  let fixture: ComponentFixture<CurrencyQuerynotificationboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyQuerynotificationboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyQuerynotificationboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
