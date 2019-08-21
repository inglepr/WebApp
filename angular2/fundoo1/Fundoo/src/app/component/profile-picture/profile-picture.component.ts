import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';
import { DataService } from 'src/app/service/data.service';
//import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {

  uploadForm: FormGroup;
  message: string;
  imageChangedEvent: any;
  croppedImage: any = '';
  file1: any
  constructor(public dialogRef: MatDialogRef<ProfilePictureComponent>,
    private noteService: NoteService, private formBuilder: FormBuilder,
    private dataService: DataService, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.message = response;
      }
    )


    this.uploadForm = this.formBuilder.group({ imageFile: [''] });
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    if (this.imageChangedEvent.target.files.length > 0) {
      const file = this.imageChangedEvent.target.files[0];

      console.log("file upload", file);

      this.file1 = this.uploadForm.get('imageFile');
      console.log("here file1 is", this.file1);
      this.file1.setValue(file);

    }
  }

  imageCropped(event) {
    this.croppedImage = event;

  }

  onSubmit() {
    this.dataService.changeMessage('app Note')
    console.log("image is", this.uploadForm.get('imageFile').value)

    this.noteService.uploadImage('setImage?noteId', this.uploadForm.get('imageFile').value).subscribe(
      // (res) => console.log(res),
      // (err) => console.log(err)
      (response: any) => {  
        if (response.statusCode === 200) {
          console.log(response);

          this.matSnackBar.open(
            "profile upload Successfully",
            "undo",
            { duration: 2500 }
          )

        } else {
          console.log(response);
          this.matSnackBar.open(
            "profile upload Failed",
            "undo",
            { duration: 2500 }
          )
        }

      }
    );
    this.dialogRef.close(' profile dialog closed ');
    this.dataService.changeMessage('app Note')

  }

  close() {
    this.dialogRef.close();
  }


}