import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

import { RegisterComponent } from './component/register/register.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DialogLabelComponent } from './component/dialog-label/dialog-label.component';
import { AddnoteComponent } from './component/addnote/addnote.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { CollabDialogComponent } from './component/collab-dialog/collab-dialog.component';
import { ProfilePictureComponent } from './component/profile-picture/profile-picture.component';


import { AppiconsComponent } from './component/appicons/appicons.component';
import { CollabNotesComponent } from './component/collab-notes/collab-notes.component';
import { PinnedNoteComponent } from './component/pinned-note/pinned-note.component';
import { ReminderLabelComponent } from './component/reminder-label/reminder-label.component';
import { ArchiveNoteComponent } from './component/archive-note/archive-note.component';
import { TrashNoteComponent } from './component/trash-note/trash-note.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { NoteComponent } from './component/note/note.component';
import { AddlabelComponent } from './component/addlabel/addlabel.component';
import { LabelComponent } from './component/label/label.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  
  { path: 'register', component: RegisterComponent },
  { path: 'resetpassword', component: ForgotpasswordComponent },
  { path: 'forgotpassword', component: ResetPasswordComponent },
  { path: 'add_note' , component:  AddnoteComponent},//
  { path: 'note' , component:NoteComponent},
  { path: 'dialogBox' , component:DialogBoxComponent},
  { path: 'appIcon' ,component: AppiconsComponent},
  { path: 'pinned' , component: PinnedNoteComponent},
  { path: 'archive' ,component: ArchiveNoteComponent},
  { path: 'trash' ,component: TrashNoteComponent},
  { path: 'label' ,component: LabelComponent},
  { path: 'addLabel' ,component: AddlabelComponent},//
 
  { path: 'labelBox' , component: DialogLabelComponent},
  { path: 'collabNotes', component: CollabNotesComponent},
  { path: 'collabBox' ,component: CollabDialogComponent},
  { path: 'search' , component: SearchComponent},
  { path: 'profile' ,component: ProfilePictureComponent},

  { path: 'reminder' , component: ReminderComponent},
  { path: 'reminderLabel' , component: ReminderLabelComponent},
 
  {
  path: 'dashboard', component: DashboardComponent,
 children: [
 
  { path: 'note' , component:NoteComponent},
  { path: 'archive' ,component: ArchiveNoteComponent},
  { path: 'trash' ,component: TrashNoteComponent},
  
  { path: 'collabNotes', component: CollabNotesComponent},
  { path: 'pinned' , component: PinnedNoteComponent},
 
  { path: 'trash' ,component: TrashNoteComponent},
  { path: 'label' ,component: LabelComponent},
  { path: 'reminder' , component: ReminderComponent},
  { path: 'reminderLabel' , component: ReminderLabelComponent}

]},



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  entryComponents:[ DialogBoxComponent ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
