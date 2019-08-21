import { Component, OnInit, Input, Inject } from '@angular/core';

import {  FormControl } from '@angular/forms';
import { MatSnackBar,MAT_DIALOG_DATA } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  @Input() noteData: any;//decorator that make a class as input property
  constructor(private noteService: NoteService, private matSnackBar: MatSnackBar,
    private formControl: FormControl,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService) { }

  note: any;
  title = new FormControl(this.data.title);
  description = new FormControl(this.data.description);
  id = this.data.noteId;
  ngOnInit() {
  }
  onClose() {
    console.log("note Udapted");
    console.log(this.note);
    console.log("Note" + this.id);
    this.note = {
      'title': this.title.value,
      'description': this.description.value
    }
    this.noteService.putRequest("updateNote?noteId=" + this.id, this.note).subscribe(
      (response: any) => {
        if (response.statusCode === 10) {

          this.dataService.changeMessage('app Achive Note')

          console.log(response);
          this.matSnackBar.open(
            "Notes Created",
            "undo",
            { duration: 2500 }

          )

        } else {
          console.log(response);

          this.dataService.changeMessage('app Achive Note')

          this.matSnackBar.open(
            "Notes not created",
            "undo",
            { duration: 2500 }
          )
        }
      }
    )
    this.note.title = null;
    this.note.description = null;
  }


}
