import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';
import { DataService } from 'src/app/service/data.service';
import { LabelService } from 'src/app/service/label.service';
import { MainNoteService } from 'src/app/service/main-note.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DialogLabelComponent } from '../dialog-label/dialog-label.component';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { CollabDialogComponent } from '../collab-dialog/collab-dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() noteData: any;//Decorator that marks a class field as
  // an input property and supplies configuration metadata. 
  message: string;
  allLabel: any[];
  note: any;
  notes:any;
  constructor(private matDialogue: MatDialog, private snackBar: MatSnackBar,
    private noteService: NoteService, private dataService: DataService,
    private noteServicee: MainNoteService , private labelService:LabelService,
    private dashBoard:DashboardComponent) { }

  ngOnInit() {
    this.getAllLabels();
    console.log("Search components")
    this.dashBoard.currentMessage.subscribe(//dashboard component object
      (response: any)=>{
        this.notes = response;
        console.log("Search")
        console.log(this.notes);
      }
    );

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

  allnotes() {
    console.log("notes get all")
    this.noteServicee.getArchiveNote().subscribe(

      (response: any) => {

        console.log(response);
        this.note = response
      }
    )
  }

  pinNote(items) {
    this.dataService.changeMessage('app Note')
    console.log("Note is pinned Successfully" + items.noteId)
    this.noteServicee.pinNote(items.noteId).subscribe((response) => {
      this.dataService.changeMessage('app Note')
      this.snackBar.open(


        response.statusMessage,
        "undo"

      )

    })
  }
  onArchive(items) {
    console.log("Note is archived");
    console.log("Note ID:" + items.noteId);
    this.noteServicee.archiveNote(items.noteId).subscribe(

      (response: any) => {
        if (response.statusCode === 200) {
          this.dataService.changeMessage('app Archive Note')
          console.log()
          this.snackBar.open(
            "Note unarchived successfully",
            "undo",
            { duration: 2500 }
          )

        } else {
          this.snackBar.open(
            "Notes archive successfully",
            "undo",
          )
        }

      }
    )


  }

  changeColor(color, noteId) {
    console.log("color is set" + color + "NOte ID  " + noteId);
    this.noteService.putRequest("color?noteId=" + noteId + "&color=" + color, "").subscribe(
      (response: any) => {
        this.dataService.changeMessage('app Achive Note')

        console.log("color is successfully applied", response);
      })
  }

  openDialog(items: any): void {
    console.log("NoteDialog" + items.noteId)
    const dialogRef = this.matDialogue.open(DialogBoxComponent, {
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

  addLabelToNote(labels, items) {
    console.log("Add Label to Note");
    console.log("NoteId" + items.noteId);
    console.log("labelId" + labels.labelId);


    this.labelService.putRequest("label/addLabelToNote?labelId=" + labels.labelId + "&noteId=" + items.noteId, "").subscribe((response: any) => {
      if (response.statusCode === 200) {
        this.dataService.changeMessage('app LabelOfNote')
        console.log("label is added to note");
        this.snackBar.open(
          "label is added to note successfully",
          "undo",
          { duration: 2500 }
        )
      }
      else {
        console.log("label add failed");
        this.snackBar.open(
          "label addtion failed",
          "undo",
          { duration: 2500 }
        )
      }

    })

  }

  getAllLabels() {

    this.noteService.getRequest("label/getlabel").subscribe(
      (response: any) => {
      console.log("get All Label API hitted")
     
      this.allLabel = response;
      console.log(response);

    })
  }


  opendialogLabel():void{
    const dialogRef=this.matDialogue.open(DialogLabelComponent);
    console.log("Dialog  created")
      }

      openCollabsDialog(items: any): void {
        console.log("Collab Dialog" + items.noteId)
    
        const dialogRef = this.matDialogue.open(CollabDialogComponent, {
          width: '60%', minHeight: '20%',
    
          data: {
            title: items.title,
            description: items.description,
            noteId: items.noteId
          }
        });
    
      }
    

}



















