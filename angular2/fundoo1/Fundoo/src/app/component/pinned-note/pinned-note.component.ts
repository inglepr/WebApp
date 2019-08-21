import { Component, OnInit, Input } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DataService } from 'src/app/service/data.service';
import { NoteService } from 'src/app/service/note.service';
import { MainNoteService } from 'src/app/service/main-note.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LabelService } from 'src/app/service/label.service';

@Component({
  selector: 'app-pinned-note',
  templateUrl: './pinned-note.component.html',
  styleUrls: ['./pinned-note.component.scss']
})
export class PinnedNoteComponent implements OnInit {

  @Input() noteData: any;
  private dialogRef: any;
  note: any;
  date: Date = new Date();
  allLabel: any;
  message: string;
  constructor(private dataService: DataService, private noteService: NoteService, private snackBar: MatSnackBar,
    private matDialog: MatDialog, private noteServicee: MainNoteService,
    private labelService : LabelService) { }

  ngOnInit() {
    //this.allnotes();
    this.allPin();
    this.dataService.currentMessage.subscribe(
      (response: any) => {
        console.log("here here all labels");
        this.getAllLabels();  
 
        this.message = response;
        // this.allnotes();


      }
    )
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
  allPin() {
    console.log("pinned notes get all")
    this.noteServicee.getPin().subscribe(

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


  setToday(data) {

    console.log(data.noteId);
    console.log("Todays date is been set ")
    const date = new Date().toDateString();
    console.log("Date added:" + date)
   

    let reminderDate = date +' 09:00:00';

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
    console.log(data.noteId);
    console.log("After week date is been set ")
    this.date.setDate(this.date.getDate() + 7);
    console.log(this.date.toString());
    this.noteService.putRequest("setRemainder?noteId=" + data.noteId + "&time=" + this.date, '').
      subscribe((response: any) => {
        console.log("Note is reminder successful");
        console.log(response)

      })
  }

  allnotes() {
    console.log("notes get all")
    this.noteService.getRequest("getAllNotes").subscribe(

      (response: any) => {

        console.log(response);
        this.note = response
      }
    )
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
  onArchive(items) {
    console.log("Note is archived");
    console.log("Note ID:" + items.noteId);
    this.noteServicee.archiveNote(items.noteId).subscribe(

      (response: any) => {
        if (response.statusCode === 200) {
          this.dataService.changeMessage('app Archive Note')
          console.log()
          this.snackBar.open(
            "Note archived successfully",
            "undo",
            { duration: 2500 }
          )

        } else {
          this.snackBar.open(
            "Notes archive unsuccessfully",
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
    this.noteService.putRequest("color?&noteId=" + noteId + "&color=" + color, "").subscribe(
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
      console.log("get All Label API is hitted");  
      this.allLabel = response;
      console.log(response);
    //  console.log("Labels are got:" + response.labelId)
    })
  }
}


