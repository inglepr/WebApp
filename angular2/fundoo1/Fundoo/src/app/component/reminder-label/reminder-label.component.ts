import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reminder-label',
  templateUrl: './reminder-label.component.html',
  styleUrls: ['./reminder-label.component.scss']
})
export class ReminderLabelComponent implements OnInit {

  note:any;
  @Input() noteRemainder: any;
  @Input() noteArray:any;
  noteRe:any[];
  constructor(private noteService:NoteService, private snackbar:MatSnackBar) { }

  ngOnInit() {
      this.getnotes();
  }

  getnotes() {
    console.log(this.noteRemainder.noteId);
    this.noteService.getRequest("getparticularReminder?noteId="+this.noteRemainder.noteId).subscribe((response: any) => {
      this.noteRe = response;
      console.log("array is in get bnotes",this.noteRe);
  
    })
  }

  removeLabel(note1) {
    console.log("in label remove"+ note1.noteId);
    this.noteService.putRequest("deleteReminder?noteId="+note1.noteId, "").subscribe(
      (response: any) => {
      if (response.statusCode === 100) {
     //   this.dataService.changeMessage('app Achive Note')

        this.snackbar.open(

          "Remainder is removed Successfully",
          "undo",
          { duration: 2500 }
        )

      }
      else {
        this.snackbar.open(

          "Remainder is removed failed",
          "undo",
          { duration: 2500 }
        )
      }
    })
  }
}
