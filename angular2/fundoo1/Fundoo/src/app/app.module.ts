import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDialogModule, MatDialog, MatChipsModule, MatNativeDateModule } from '@angular/material';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { DialogLabelComponent } from './component/dialog-label/dialog-label.component';
import { AddnoteComponent } from './component/addnote/addnote.component';
import { SearchComponent } from './component/search/search.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { CollabDialogComponent } from './component/collab-dialog/collab-dialog.component';
import { ProfilePictureComponent } from './component/profile-picture/profile-picture.component';
import { LabelComponent } from './component/label/label.component';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AddlabelComponent } from './component/addlabel/addlabel.component';
import { AppiconsComponent } from './component/appicons/appicons.component';
import { CollabNotesComponent } from './component/collab-notes/collab-notes.component';

import { NoteComponent } from './component/note/note.component';
import { PinnedNoteComponent } from './component/pinned-note/pinned-note.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { ReminderLabelComponent } from './component/reminder-label/reminder-label.component';
import { ArchiveNoteComponent } from './component/archive-note/archive-note.component';
import { TrashNoteComponent } from './component/trash-note/trash-note.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    RegisterComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    DialogLabelComponent,

    AddnoteComponent,
    SearchComponent,
    DialogBoxComponent,
    CollabDialogComponent,
    ProfilePictureComponent,
    LabelComponent,
    
    AddlabelComponent,
    AppiconsComponent,
    CollabNotesComponent,
    
    NoteComponent,
    PinnedNoteComponent,
    ReminderComponent,
    ReminderLabelComponent,
   ArchiveNoteComponent,
    TrashNoteComponent,
  
  
  ],
  imports: [
    BrowserModule, MatDialogModule,
    MatCardModule, MatCardModule, BrowserAnimationsModule, MatButtonModule, MatSnackBarModule,
   MatCheckboxModule, MatFormFieldModule,MatInputModule,MatIconModule,
   AppRoutingModule,RouterModule,
BrowserAnimationsModule, FormsModule, CommonModule, FlexLayoutModule,
    MatListModule, MatBottomSheetModule,MatButtonModule,
MatCheckboxModule,MatChipsModule,
    HttpClientModule,
    MatSidenavModule,MatDatepickerModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTooltipModule,
    ReactiveFormsModule, ImageCropperModule,MatNativeDateModule
  ],
   entryComponents: [],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
