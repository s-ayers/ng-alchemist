import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchemistBusyComponent } from './alchemist-busy.component';

describe('AlchemistBusyComponent', () => {
  let component: AlchemistBusyComponent;
  let fixture: ComponentFixture<AlchemistBusyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlchemistBusyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlchemistBusyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
