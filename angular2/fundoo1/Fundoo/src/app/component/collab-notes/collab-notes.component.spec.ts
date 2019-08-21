import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabNotesComponent } from './collab-notes.component';

describe('CollabNotesComponent', () => {
  let component: CollabNotesComponent;
  let fixture: ComponentFixture<CollabNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
