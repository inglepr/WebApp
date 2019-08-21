import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
// import { MatDialog, MatSnackBar } from '@angular/material';
// import { LabelService } from 'src/app/service/label.service';
// import { NoteService } from 'src/app/service/note.service';
// import { DataService } from 'src/app/service/data.service';
// import { CollabDialogComponent } from '../collab-dialog/collab-dialog.component';

const httpOptions: any = {
  headers: new HttpHeaders({

    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'all',
    'Access-Control-Allow-Origin': '*'
  })
};


@Component({
  selector: 'app-appicons',
  templateUrl: './appicons.component.html',
  styleUrls: ['./appicons.component.scss']
})
export class AppiconsComponent implements OnInit {
  colors = [
    [
      { colorName: "white", colorCode: "#FFFFFF" },
      { colorName: "red", colorCode: "#FF0000" },
      { colorName: "orange", colorCode: "#FFA500" },
      { colorName: "yellow", colorCode: "#FFFF00" },
    ],
    [
      { colorName: "green", colorCode: "#008000" },
      { colorName: "teal", colorCode: "#008080" },
      { colorName: "blue", colorCode: "#0000FF" },
      { colorName: "dark blue", colorCode: "#0000A0" },
    ],
    [
      { colorName: "purple", colorCode: "#800080" },
      { colorName: "pink", colorCode: "#FFC0CB" },
      { colorName: "brown", colorCode: "#A52A2A" },
      { colorName: "gray", colorCode: "#A9A9A9" },
    ]
  ]


  constructor() { }

  ngOnInit() {
  }

}
    
  

//   constructor(private matDialog: MatDialog, private labelService: LabelService, private matSnackBar: MatSnackBar, private noteService: NoteService, private dataSharing: DataService) { }

//   ngOnInit() {
//     console.log(this.noteData)
//     this. getLabels();
//   }

//   todayReminder(items) {
//     console.log("Note is got" + this.noteData.noteId)
//     const currentDate = new Date().toDateString();
//     console.log("Date :" + currentDate)
//     this.noteService.createNote("note/reminder?noteId=" + this.noteData.noteId + "&remainder=" + currentDate, "").subscribe(
//       (response: any) => {
//         if (response.statusCode === 21) {
//           this.matSnackBar.open(
//             "reminder set successfully",
//             "undo",
//             { duration: 2500 }
//           )
//         }
//         else {
//           this.matSnackBar.open(
//             "failed to set reminder",
//             "undo",
//             { duration: 2500 }
//           )
//         }
//       }
//     )
//   }

//    tomorrowReminder() {
 
    
//       let currDate=new Date();
//       var nextDate=new Date(currDate);
//       nextDate.setDate(currDate.getDate()+1);
//     this.remData={
//       reminder:nextDate.toISOString()
//     }
//     console.log(this.remData.remainder);
//     this.noteService.createNote("note/reminder?noteId=" + this.noteData.noteId + "&remainder=" + this.remData.reminder, "").subscribe(
//       (response: any) => {
//         this.matSnackBar.open(
//           "remainder set successfully", "undo", { duration: 2500 }
//         )
//       }
//     )
//   }

//    nextWeek() {
//       var day=new Date();
//       var days=7-day.getDay()+4;
//       var nextDay=new Date(day.setDate(day.getDate()+days));
//       this.remData={
//         reminder:nextDay.toISOString()
//       }
//       console.log("next week reminder")
//       this.noteService.createNote("note/reminder?noteId=" + this.noteData.noteId + "&remainder=" + this.remData.reminder, "").subscribe(
//       (response: any) => {
//         this.matSnackBar.open(
//           "remainder set successfully", "undo", { duration: 2500 }
//         )

//       }
//     )

//   }
//   deleteRemainder() {
//     this.noteService.deleteRequest('note/deleteRemainder?noteId=' + this.noteData.noteId).subscribe(
//       (response: any) => {
//         if (response.statusCode === 21) {
//           this.matSnackBar.open(
//             "remainder delated", "undo", { duration: 2500 }
//           )
//         }
//       }
//     )
//   }

//   changeColor(color) {
//     this.noteService.putRequest("note/setColor?color=" + color + "&noteId=" + this.noteData.noteId, null).subscribe(
//       (response: any) => {
//         if (response.statusCode === 21) {
//           this.matSnackBar.open(
//             "color set successfully", "undo", { duration: 2500 }
//           )
//         }
//       }
//     )
//   }
 
//   openCollaboratorDialog() {
//     const dialogRef = this.matDialog.open(CollabDialogComponent, {
//       width: '600px', height: '230px',
//       data: {
//         noteId: this.noteData.noteId
//            }
//     });
//     dialogRef.afterClosed().subscribe(result => { console.log('dialog was closed'); })
//   }

//   archive(items): void {
//     this.noteService.putRequest('note/archive?noteId=' + this.noteData.noteId, null).subscribe(
//       (response: any) => {
//         if (response.statusCode === 21) {
//           this.matSnackBar.open(
//             "Archived note successfully",
//             "undo",
//             { duration: 2500 }
//           )
//         }
//         else {
//           this.matSnackBar.open(
//             "failed to Archive",
//             "undo",
//             { duration: 2500 }
//           )
//         }
//       }
//     )
//   }
//   deletenote(items): void {
//     console.log("noteid :" + items);
//     this.noteService.putRequest('note/trash?noteId=' + this.noteData.noteId, null).subscribe(
//       (response: any) => {
//         if (response.statusCode === 21) {
//           console.log(response);
//           this.matSnackBar.open(
//             "Note trashed successfully",
//             "undo",
//             { duration: 2500 });
//         }
//         else {
//           this.matSnackBar.open(
//             "failed to trash",
//             "undo",
//             { duration: 2500 }
//           )
//         }
//       }
//     );
//   }
//   getLabels() {
//     //this.labelService.getRequest('label/getlabel').subscribe(
//       this.labelService.getRequest('/label/getlabel').subscribe(
//       (response: any) => {
//         console.log("Labels are got")
//         console.log(response)
//         this.allLabels = response;
//       }
//     )
//   }
//   onEvent(event) {
//     event.stopPropagation();
//   }

//   addLabelToNote(labelId) {
//     // console.log(labelId);
//     this.labelService.putRequest("label/addLabelToNote?labelId=" + labelId + "&noteId=" + this.noteData.noteId, null).subscribe(
//       (response: any) => {
//         if (response.statusCode === 21) {
//           this.matSnackBar.open(
//             "label added to note successfully",
//             "undo",
//             { duration: 2500 }
//           )
//         }
//         else {
//           this.matSnackBar.open(
//             "failed to add label",
//             "undo",
//             { duration: 2500 }
//           )
//         }
//       }
//     )
//   }
//   deleteLabelToNote(items, label) {
//     this.labelService.deleteRequest("label/removeFromNote?labelId=" + label.labelId + "&noteId=" + items.noteId).subscribe(
//       (response: any) => {
//         if (response.statusCode === 21) {
//           this.matSnackBar.open(
//             "deleted successfully",
//             "undo",
//             { duration: 2500 }
//           )
//         }
//       }
//     )
//   }
// }