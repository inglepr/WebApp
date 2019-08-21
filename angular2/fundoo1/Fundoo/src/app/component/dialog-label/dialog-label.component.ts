import { Component, OnInit, Inject } from '@angular/core';
import { Label } from 'src/app/model/label';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { LabelService } from 'src/app/service/label.service';
//import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/service/note.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dialog-label',
  templateUrl: './dialog-label.component.html',
  styleUrls: ['./dialog-label.component.scss']
})
export class DialogLabelComponent implements OnInit {

  label: Label = new Label();
  labelData: Label = new Label();
  message : any;
  labels : any;

  constructor(private matSnackBar : MatSnackBar, private labelService : LabelService, private dataService : DataService,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private noteService:NoteService) { }

  ngOnInit() 
    
   { this.noteService.getRequest("label/getlabel").subscribe(
      (response: any) => {
        
        console.log("got labels",response)
        this.labels = response,
          console.log(this.labelData, "gdfgdsgsd")
      
      }

    )

  }
  createlabel() {

    this.labelService.postRequest('label/createLabel', this.labelData).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          this.dataService.changeMessage('app Achive Note')

          this.matSnackBar.open(
            "Label created Successfully",
            "undo",
            { duration: 2500 }
          )
        } else {
          console.log(response);
          this.matSnackBar.open(
            "Label creation Failed",
            "undo",
            { duration: 2500 }
          )
        }

      }
    )
  }

  deleteLabel(label) {
    console.log(label.labelId);
    this.labelService.putRequest('label/delete?labelId='+label.labelId," ").subscribe(
      (response: any) => {
        if (response.statusCode === 100) {
          this.dataService.changeMessage('app Achive Note')

          this.matSnackBar.open(
            "Label deleted Successfully",
            "undo",
            { duration: 2500 }
          )
        } else {
          console.log(response);
          this.matSnackBar.open(
            "Label deletion Failed",
            "undo",
            { duration: 2500 }
          )
        }

      }
    )

  }
  onEditLabel(label,data:any) {
    console.log("dataftd",data)
    
    
    
    console.log("Label is id" + label.labelId)
    console.log(label);
    var data1={
       "labelName":data
    }
    this.labelService.putRequest("label/updateLabel?labelId="+label.labelId,data1).subscribe(response => {
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
          "undo",)
          { duration: 2500 }
        
      }
    
    
  }),
  (err)=>{
    this.matSnackBar.open(
      "Note is updation Failed",
      "undo",)
      { duration: 2500 }
  }

}


}
