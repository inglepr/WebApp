import { Component, OnInit, Input } from '@angular/core';
import { CollabDialogComponent } from '../collab-dialog/collab-dialog.component';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/service/data.service';
import { LabelService } from 'src/app/service/label.service';
import { ViewService } from 'src/app/service/view.service';
import { MainNoteService } from 'src/app/service/main-note.service';
import { NoteService } from 'src/app/service/note.service';
import { DateValueComp } from 'src/app/model/date-value-comp';
import { HttpHeaders } from '@angular/common/http';
const httpOptions: any = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'all',
    'Access-Control-Allow-Origin': '*'
  })
};
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  dateValue: DateValueComp = new DateValueComp();
  @Input() noteData: any;
  private dialogRef: any;
  note: any;
  list:any;
  layout:any;
  allLabel: any; 
  message: string;
  views:any;
  allign:string ='';

  direction: string = "row";
  direction1: string = 'wrap';
  date: Date = new Date();  
  toggle: boolean = true;

  constructor(private matDialogue: MatDialog, private snackBar: MatSnackBar,
    private noteService: NoteService, private dataService: DataService,
    private noteServicee: MainNoteService, private labelService: LabelService,
    private matDialog: MatDialog,private view:ViewService) { }

  ngOnInit() {

        this.allUnpinnotes();
        this.getAllLabels();

        this.view.getView().subscribe(

          (res) => {
          this.views = res;
          this.direction = this.views.data;
          if (this.direction == 'row') {
          this.direction1 = 'wrap';
          this.allign = 'start'
          }
          else {
          this.direction1 = ''
          this.allign = 'center'
          }
      
          console.log(this.direction);
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
  openDialog(items: any): void {
    console.log("NoteDialog" + items.noteId)
    const dialogRef = this.matDialogue.open(DialogBoxComponent, {
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
 
  setToday(data) {

    console.log(data.noteId);
    console.log("Todays date is been set ")
    const date = new Date().toDateString();
    console.log("Date added:" + date)
   

    let reminderDate = date +' 08:00:00';

    console.log('in reminder1==>', reminderDate);

    this.noteService.putRequest("setRemainder?noteId=" + data.noteId + "&time=" + reminderDate, '').subscribe(
      (response: any) => {

        console.log("Note is remaindered successfully")
      })


  }

  setTomorrow(data) {
    console.log(data.noteId);
    console.log("Tomorrow date is been set ")
    //var date = new Date();
    
   this.date.setDate(this.date.getDate() + 1);
    console.log(this.date.toString());
    this.noteService.putRequest("setRemainder?noteId="+data.noteId+"&time="+this.date, '').
      subscribe((response: any) => {
        console.log("Note is reminder successful");
        console.log(response)
                                                                                             
      })


  }


  setWeekly(data) {
    console.log(data  .noteId);
    console.log("After week date is been set ")
    this.date.setDate(this.date.getDate() + 7);
    console.log(this.date.toString());
    this.noteService.putRequest("setRemainder?noteId="+data.noteId+"&time="+this.date, '').
      subscribe((response: any) => {
        console.log("Note is reminder successful");
        console.log(response)
                                                                                             
      })
  }


  allUnpinnotes() {
    console.log("notes get all")
    this.noteServicee.allUnpinAndUnarchive().subscribe(

      (response: any) => {


        console.log(response);
        this.note = response
        console.log(this.note.image)
      }
    )
  }

  pinNote(items) {

    console.log("Note is pinned" + items.noteId)
    this.noteServicee.pinNote(items.noteId).subscribe((response) => {
      this.dataService.changeMessage('app Note')
      this.snackBar.open(


        response.statusMessage,
        "undo",
        { duration: 2500 }
      )

    })
  }


  onArchive(items) {
    console.log("Note is archived");
    console.log("Note ID:" + items.noteId);
    this.noteServicee.archiveNote(items.noteId).subscribe(

      (response: any) => {
        if (response.statusCode === 200) {
          this.dataService.changeMessage('app Achive Note')

          console.log()
          this.snackBar.open(
            "Note archived successfully",
            "undo",
            { duration: 2500 }
          )

        } else {
          this.snackBar.open(
            "Notes archive  failed",
            "undo",
          )
        }

      }
    )
  }

  trashNote(items) {
    console.log("Note Trashed" + items.noteId);


    this.noteServicee.trashNote(items.noteId).subscribe(

      (response: any) => {
        if (response.statusCode === 200) {
          this.dataService.changeMessage('app Note')
          console.log()
          this.snackBar.open(
            "Note moved to trash",
            "undo",
            { duration: 2500 }
          )

        } else {
          this.snackBar.open(
            "Notes trash  failed",
            "undo",
          )
        }

      }

    )


  }

  changeColor(color, noteId) {
    console.log("color is set" + color + "NOte ID  " + noteId);
    this.noteService.putRequest("color?noteId="+noteId+"&color="+color,"").subscribe(
      (response: any) => {
        this.dataService.changeMessage('app Achive Note')

        console.log("color is successfully applied", response);
      })
  }


  addLabelToNote(labels, items) {
    console.log("Add Label to Note");
    console.log("NoteId" + items.noteId);
    console.log("labelId" + labels.labelId);


    this.labelService.putRequest("label/addlabeltonote?labelId=" + labels.labelId + "&noteId=" + items.noteId, "").subscribe((response: any) => {
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
        console.log("get All Label API is hitted")

        this.allLabel = response;
        console.log(response);
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

}



