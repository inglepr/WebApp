import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Collaborator } from 'src/app/model/collaborator';

@Component({
  selector: 'app-collab-dialog',
  templateUrl: './collab-dialog.component.html',
  styleUrls: ['./collab-dialog.component.scss']
})
export class CollabDialogComponent implements OnInit {

  collaboratedUser: any[];
  message: any;
  emailId: any;
  constructor(private dataService: DataService, private noteService: NoteService,
    private matSnackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { }

  title = new FormControl(this.data.title);
  description = new FormControl(this.data.description);
  id = this.data.noteId;
  collaborator: Collaborator = new Collaborator();
  ngOnInit() {
    this.emailId = localStorage.getItem("emailId");//get emailId from local storage
    this.noteService.getRequest("getCollaborator").subscribe((response: any) => {
      this.collaboratedUser = response;
      console.log(this.collaboratedUser)
    })
  }

  addCollab() {
    console.log(this.id);
    console.log(this.collaborator.emailId);
    this.noteService.putRequest("addCollaborator?noteId="+this.id+"&emailId="+this.collaborator.emailId," ").subscribe(
      (response: any) => {
        console.log("RESPONSE :::::",response);

        if (response.statusCode == 200) {
          this.matSnackBar.open(
            "Collaborator added",
            "undo",
            { duration: 2500 }

          )
        }
        else {
          this.matSnackBar.open(
            "collaborator not added successfull",
            "undo",
            { duration: 2500 }

          )
        }
      }
    )
  }

  cancel(form: FormGroup)
  {
      form.reset();
  }

}
