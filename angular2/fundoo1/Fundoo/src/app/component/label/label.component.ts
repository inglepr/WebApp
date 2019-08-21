import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { LabelService } from 'src/app/service/label.service';
import { DataService } from 'src/app/service/data.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() noteArray: any;
  @Input() noteLabel: any;

  constructor(private noteService: NoteService, private dataService: DataService, private matSnackBar: MatSnackBar,
    private labelService : LabelService) { }

  ngOnInit() {
    //console.log("get label")
    //this.allLabel();
  }
  // }
  // allLabel(){
  //   this.labelService.getRequest("getlabelofnote?noteId=" + this.noteLabel.noteId).subscribe((response: any) => {
  //     this.noteArray = response;
  //     console.log("array is",this.noteArray );
  //   })
    
  // }

  removeLabel(label) {
    console.log("in label remove"+ label.labelId);
    this.labelService.putRequest("label/removelabelfromnote?labelId=" + label.labelId + "&noteId=" + this.noteLabel.noteId, "").subscribe(
      (response: any) => {
      if (response.statusCode === 100) {
        this.dataService.changeMessage('app Achive Note')

        this.matSnackBar.open(

          "Label is removed Successfully",
          "undo",
          { duration: 2500 }
        )

      }
      else {
        this.matSnackBar.open(

          "Label is removed failed",
          "undo",
          { duration: 2500 }
        )
      }
    })
  }
 }


