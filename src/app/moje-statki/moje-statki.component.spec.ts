import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeStatkiComponent } from './moje-statki.component';

describe('MojeStatkiComponent', () => {
  let component: MojeStatkiComponent;
  let fixture: ComponentFixture<MojeStatkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojeStatkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojeStatkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
