import { Component, OnInit, Input } from '@angular/core';
import { DateValueComp } from 'src/app/model/date-value-comp';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/service/data.service';
import { LabelService } from 'src/app/service/label.service';
import { NoteService } from 'src/app/service/note.service';
import { MainNoteService } from 'src/app/service/main-note.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {

  dateValue: DateValueComp = new DateValueComp();
  @Input() noteData: any;
  message: string;
  note: any;
  allLabel: any;
  date: Date = new Date(); //retrive date and time
  constructor(private matDialogue: MatDialog, private snackBar: MatSnackBar,
    private noteService: NoteService, private dataService: DataService,
    private noteServicee: MainNoteService , private labelService:LabelService) { }

  ngOnInit() {

    this.dataService.currentMessage.subscribe(
      (response: any) => {

        this.message = response;
        this.allnotes();
        console.log("here all labels")
        this.getAllLabels();

    

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

  allnotes() {
    console.log("notes get all")
    this.noteServicee.getArchiveNote().subscribe(

      (response: any) => {

        console.log(response);
        this.note = response
      }
    )
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
      console.log("get All Label API is hitted")
     
      this.allLabel = response;
      console.log(response);

    })
  }

}



