import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { FormBuilder } from '@angular/forms';
import { MatTooltipModule, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { MainNoteService } from 'src/app/service/main-note.service';
import { LabelService } from 'src/app/service/label.service';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  private popup: boolean;
  message: String;
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private noteService: NoteService,
    private matTooltipModule: MatTooltipModule, private route: ActivatedRoute, private router: Router,
    private noteServicee: MainNoteService, private labelService: LabelService
  ) { }

  private flag = false;
  colors: String = "white";
  title: any = "";
  description: any = "";
  allLabel: any;
  note: Note = new Note();
  note1:any[];

  ngOnInit() {
this.allUnpinnotes();
this.getAllLabels();
  }
  onPopup() {
    this.popup = true;
  }
  close() {
    this.allUnpinnotes();
    console.log("onClose():: executed");
    console.log(this.note.title);
    console.log(this.note.description);
    console.log( "NOTES           JXBHFJXZBFZBXHFBSZ",this.note);

    
      this.noteServicee.createNote("createNote"+this.note).subscribe(
        (respose: any) => {
          if (respose.statusCode === 100) {
            if(this.note.title == " " || this.note.description == " ")
            {
                this.snackBar.open(
                  "title or description must be need",
                  "undo",
                  {duration: 2500}
                )
            }
            console.log(respose);
            this.snackBar.open(
              "Note is created Successfully",
              "undo",
              { duration: 2500 }
            )
            this.note.title = null;
            this.note.description = null;
            this.popup = false;
          }
          else {
            console.log(respose);

            this.snackBar.open(
              "Note creation Failed",
              "undo",
              { duration: 2500 }
            )
          }

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

  allUnpinnotes() {
    console.log("notes get all")
    this.noteServicee.allUnpinAndUnarchive().subscribe(

      (response: any) => {


        console.log(response);
        this.note1 = response
        // console.log(this.note.image)
      }
    )
  }

  getAllLabels() {

    this.noteService.getRequest("label/getlabel").subscribe(
      (response: any) => {
      console.log("get All Label API is hitted")
     
      this.allLabel = response;
      console.log(response);
    //  console.log("Labels are got:" + response.labelId)

      
    })
  }

  addLabelToNote(labels, items) {
    console.log("Add Label to Note");
    console.log("NoteId" + items.noteId);
    console.log("labelId" + labels.labelId);


    this.labelService.putRequest("label//addLabelToNote?labelId=" + labels.labelId + "&noteId=" + items.noteId, "").subscribe((response: any) => {
      if (response.statusCode === 200) {
      
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


}