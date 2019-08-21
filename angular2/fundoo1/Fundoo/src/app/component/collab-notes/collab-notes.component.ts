import { Component, OnInit, Input } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DialogLabelComponent } from '../dialog-label/dialog-label.component';
import { CollabDialogComponent } from '../collab-dialog/collab-dialog.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';
import { DataService } from 'src/app/service/data.service';
import { MainNoteService } from 'src/app/service/main-note.service';
import { LabelService } from 'src/app/service/label.service';

@Component({
  selector: 'app-collab-notes',
  templateUrl: './collab-notes.component.html',
  styleUrls: ['./collab-notes.component.scss']
})
export class CollabNotesComponent implements OnInit {

  @Input() noteData: any;
  message: string;
  alllabel: any[];
  collabNotes: any;
  note: any;

  constructor(private matSnackBar: MatSnackBar,
    private matDialog: MatDialog,
    private noteService: NoteService,
    private dataService: DataService,
    private noteServicee: MainNoteService,
    private labelService: LabelService
  ) { }

  ngOnInit() {
    this.getAllLabels();
    this.getAllCollaboratedNotes();
  }


  getAllCollaboratedNotes() {
    console.log("collab notes got into the collab")
    this.noteService.getRequest("getCollaborator").subscribe((response: any) => {
      this.collabNotes = response;
      console.log(this.collabNotes)
      console.log("upside notes are collab notes got")

    })
  }
  openCollabsDialog(items: any): void {
    console.log("Collab Dialog" + items.noteId)

    const dialogRef = this.matDialog.open(CollabDialogComponent, {
      width: '60%', minHeight: '20%',

      data: {
        title: items.title,
        description: items.description,
        noteId: items.noteId
      }
    });

  }

  opendialogLabel(): void {
    const dialogRef = this.matDialog.open(DialogLabelComponent,
      {
        width: '350px',
        height: '800px'
      });
    console.log("Dialog is created")
  }


  allnotes() {
    console.log("notes get all")
    //this.noteService.getRequest("getAllNotes").subscribe(
    this.noteService.getRequest("getAllNotes").subscribe(

      (response: any) => {


        console.log(response);
        this.note = response
      }
    )
  }

  onArchive(items) {
    console.log("Note is archived");
    console.log("Note ID:" + items.noteId);
    this.noteServicee.archiveNote(items.noteId).subscribe(

      (response: any) => {
        if (response.statusCode === 200) {
          this.dataService.changeMessage('app Archive Note')
          console.log()
          this.matSnackBar.open(
            "Note unarchived successfully",
            "undo",
            { duration: 2500 }
          )

        } else {
          this.matSnackBar.open(
            "Notes archive successfully",
            "undo",
          )
        }

      }
    )


  }

  pinNote(items) {
    this.dataService.changeMessage('app Note')
    console.log("Note is pinned Successfully" + items.noteId)
    this.noteServicee.pinNote(items.noteId).subscribe((response) => {
      this.dataService.changeMessage('app Note')
      this.matSnackBar.open(


        response.statusMessage,
        "undo"

      )

    })
  }

  openDialog(items: any): void {
    console.log("NoteDialog" + items.noteId)
    const dialogRef = this.matDialog.open(DialogBoxComponent, {
      width: '600px', height: '230px',
      data: {
        title: items.title,
        description: items.description,
        noteId: items.noteId

      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog result:${result}');
    });

  }
  colorCodes =
  [
    [
      { name: "white", hexcode: "#ffffff" },
      { name: "lightGreen", hexcode: "#f28b82" },
      { name: "purple", hexcode: "#f7bc04" },
      { name: "red", hexcode: "#faf474" },
    ],
    [
      { name: "Teal", hexcode: "#cbff90" },
      { name: "pink", hexcode: "#a7ffeb" },
      { name: "orange", hexcode: "#cbf0f8" },
      { name: "blue", hexcode: "#adcbfa" },
    ],
    [
      { name: "brown", hexcode: "#d7aefb" },
      { name: "yellow", hexcode: "#fdcfe8" },
      { name: "darkBlue", hexcode: "#cbb294" },
      { name: "gray", hexcode: "#e8eaed" }
    ]
  ]

  getAllLabels() {
    this.noteService.getRequest("label/getlabel").subscribe((response: any) => {
   // this.noteService.getRequest("getlabel").subscribe((response: any) => {
      console.log("get All Label API is hitted")
      // this.dataService.changeMessage('app Note')

      //console.log(response);
      this.alllabel = response;
      console.log("Labels are got:" + response.labelId)
    })
  }

  trashNote(items) {
    console.log("Note Trashed" + items.noteId);


    this.noteServicee.trashNote(items.noteId).subscribe(

      (response: any) => {
        if (response.statusCode === 200) {
          this.dataService.changeMessage('app Note')
          console.log()
          this.matSnackBar.open(
            "Note moved to trash",
            "undo",
            { duration: 2500 }
          )

        } else {
          this.matSnackBar.open(
            "Notes trash  failed",
            "undo",
          )
        }

      }

    )
    

  }

    
  changeColor(color, noteId) {
    console.log("color is set" + color + "NOte ID  " + noteId);
    this.noteService.putRequest("color?noteId=" + noteId+"&color=" + color, "").subscribe(
      (response: any) => {
      this.dataService.changeMessage('app Achive Note')

      console.log("color is successfully applied",response);
    })
  }
  addLabelToNote(labels, items) {
    console.log("Add Label to Note");
    console.log("NoteId" + items.noteId);
    console.log("labelId" + labels.labelId);


    this.labelService.putRequest("label/addLabelToNote?labelId=" + labels.labelId + "&noteId=" + items.noteId, "").subscribe((response: any) => {
      if (response.statusCode === 200) {
        this.dataService.changeMessage('app LabelOfNote')
        console.log("label is added to note");
        this.matSnackBar.open(
          "label is added to note successfully",
          "undo",
          { duration: 2500 }
        )
      }
      else {
        console.log("label add failed");
        this.matSnackBar.open(
          "label addtion failed",
          "undo",
          { duration: 2500 }
        )
      }

    })

  }


}

