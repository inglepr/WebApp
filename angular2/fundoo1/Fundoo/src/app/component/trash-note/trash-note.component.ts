import { Component, OnInit } from '@angular/core';
import { MainNoteService } from 'src/app/service/main-note.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {

  note: any[];
  message: string;
  constructor(private noteService: MainNoteService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private dataService: DataService) { }

  ngOnInit() {
    console.log("getting all trash note");
    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.message = response;
        this.getAllTrashedNotes();

      }
    )
  }
  deleteNote(id) {
    console.log("note delete permanently");
    console.log("Note ID" + id);

    this.noteService.permenantlyDeleteNote(id).subscribe(

      (response: any) => {
        if (response.statusCode === 200) {
          this.dataService.changeMessage('Trash Note')
          console.log()
          this.snackBar.open(
            "Note deleted Successfully",
            "undo",
            { duration: 2500 }
          )

        } else {
          this.snackBar.open(
            "Notes deletion  failed",
            "undo",
          )
        }

      }
    )

  }


  getAllTrashedNotes() {
    this.noteService.getTrash().subscribe((response: any) => {

      console.log(response);
      this.note = response;
    })
  }

  onRestore(id) {
    console.log("note delete permanently");
    console.log("Note ID" + id);

    this.noteService.restoreNote(id).subscribe(

      (response: any) => {
        if (response.statusCode === 200) {
          console.log()
          this.snackBar.open(
            "Note restored Successfully",
            "undo",
            { duration: 2500 }
          )

        } else {
          this.snackBar.open(
            "Notes restoration failed",
            "undo",
          )
        }

      }
    )
  }

}


