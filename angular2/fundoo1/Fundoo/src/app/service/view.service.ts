import { Injectable } from '@angular/core';
import { NoteService } from './note.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  toggle: boolean = true;

  constructor(private noteService: NoteService) { }
  subject = new Subject();

  getView() {
    this.gridview(this.toggle);
    return this.subject.asObservable();
  }

  gridview(result) {
    this.toggle = result
    if (this.toggle == false) {
      console.log("in if of view service")
       this.subject.next({ data: "column" });

    }
    else {
       console.log("in else of view service")
      this.subject.next({ data: "row " });

    }
  }

  getNotes() {
    this.noteService.getRequest("getAllNotes")

  }
}
