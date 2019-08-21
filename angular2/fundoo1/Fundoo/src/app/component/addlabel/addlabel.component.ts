import { Component, OnInit } from '@angular/core';
import { Label } from 'src/app/model/label';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';
import { DialogLabelComponent } from '../dialog-label/dialog-label.component';
import { LabelService } from 'src/app/service/label.service';

@Component({
  selector: 'app-addlabel',
  templateUrl: './addlabel.component.html',
  styleUrls: ['./addlabel.component.scss']
})
export class AddlabelComponent implements OnInit {

  label : any[];
  data: any[];
  labelEdit : Label = new Label();
  constructor(private matSnackBar : MatSnackBar, private noteService : NoteService, private labelService : LabelService,
    private dialog : MatDialog) { }

  ngOnInit() {
    this.noteService.getRequest("/label/getlabel").subscribe(
      (response: any) => {
        console.log("got labels")
        this.label = response,
          console.log(this.label)
      
      }

    )
  }

  opendialogLabel(): void {
    const dialogRef = this.dialog.open(DialogLabelComponent,
      {
        width: '350px',
        height: '800px'
      });
    console.log("Dialog is created")
  }

  onEditLabel(labels) {
    console.log("Label is id" + labels.labelId)
    console.log("Label is updated" + labels.labelName)
    console.log(labels);
    this.labelService.putRequest("label/update?labelId="+labels.labelId,labels).subscribe(response => {
      if (response.statusCode === 100) {
        console.log(response);
        this.matSnackBar.open(
          "Note is updated Successfully",
          "undo",
          { duration: 2500 }
        )
      }
      else{
        this.matSnackBar.open(
          "Note is updation Failed",
          "undo",
          { duration: 2500 }
        )
      }

    })
    
  }
  onDeleteLabel(labels) {

    console.log("Label is deleted" + labels.labelId)
    this.labelService.putRequest("label/delete?labelId="+labels.labelId," ").subscribe(response => {
      if (response.statusCode === 100) {
        console.log(response);
        this.matSnackBar.open(
          "Note is deleted Successfully",
          "undo",
          { duration: 2500 }
        )
      }
      else{
        this.matSnackBar.open(
          "Note is delettion Failed",
          "undo",
          { duration: 2500 }
        )
      }

    })

  }

}


