import { TestBed } from '@angular/core/testing';

import { MainNoteService } from './main-note.service';

describe('MainNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainNoteService = TestBed.get(MainNoteService);
    expect(service).toBeTruthy();
  });
});
