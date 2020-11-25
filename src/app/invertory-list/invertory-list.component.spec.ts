import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertoryListComponent } from './invertory-list.component';

describe('InvertoryListComponent', () => {
  let component: InvertoryListComponent;
  let fixture: ComponentFixture<InvertoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
