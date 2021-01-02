import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchemistViewComponent } from './alchemist-view.component';

describe('AlchemistViewComponent', () => {
  let component: AlchemistViewComponent;
  let fixture: ComponentFixture<AlchemistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlchemistViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlchemistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
