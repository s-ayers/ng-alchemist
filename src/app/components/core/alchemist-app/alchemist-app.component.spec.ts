import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchemistAppComponent } from './alchemist-app.component';

describe('AlchemistAppComponent', () => {
  let component: AlchemistAppComponent;
  let fixture: ComponentFixture<AlchemistAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlchemistAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlchemistAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
