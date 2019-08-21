import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from '@angular/material';
import { ViewService } from 'src/app/service/view.service';
import { NoteService } from 'src/app/service/note.service';
//
import { LabelService } from 'src/app/service/label.service';
import { ElasticSearch } from 'src/app/model/elastic-search';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { DialogLabelComponent } from '../dialog-label/dialog-label.component';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  emailId: string;
  token: string;
  firstName: string;
  label: any
  searchNote: any;
  message: any;
  toggle: boolean = true;
  lastName :string;
  searchData: ElasticSearch= new ElasticSearch();
  private obtainNotes = new BehaviorSubject([]);
  currentMessage = this.obtainNotes.asObservable();
  constructor(private router: Router,
    private matDialog: MatDialog,
    private dataService: DataService, private noteService: NoteService, private dialog: MatDialog,
    private view: ViewService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.dataService.currentMessage.subscribe(
      (response: any) => { 
        this.message = response;
        this.getLabels();
      }
    );
    this.token = localStorage.getItem('token')
    console.log("token is in dashboard ==>", this.token);
    
    this.emailId = localStorage.getItem('emailId')
    this.firstName = localStorage.getItem('firstname');
    this.lastName = localStorage.getItem('lastname');

    console.log("firstname =========>",this.firstName);
    console.log("lastname =====>",this.lastName);
 
    
  }

  getLabels() {
    console.log("all labels are here")

    this.noteService.getRequest("label/getlabel").subscribe((response: any) => {
      this.label = response;
      console.log(this.label)
    })
  }
  list() {
    this.toggle = false;
    this.view.gridview(this.toggle);
  }
  grid() {
    this.toggle = true;
    this.view.gridview(this.toggle);
    
  }


  opendialogLabel(): void {
    const dialogRef = this.dialog.open(DialogLabelComponent);
    console.log("Dialog is created")
  }

  refresh(): void {
    window.location.reload();
  }

  archive() {
    this.router.navigateByUrl('dashboard/archive')
  }

  note() {
    this.router.navigateByUrl('dashboard/note');
  }

  trash() {
    this.router.navigateByUrl('dashboard/trash');
  }

  onSearchChange(message: string) {
    console.log("search is message that:" + message)
    this.noteService.getRequest("searchNote?query=" + message).subscribe(
      (response: any) => {
        this.obtainNotes.next(response);
        this.searchNote = response;
        console.log("response is", response);
        this.router.navigate(['/dashboard']);
      }
    );
  }

  profileDialog(): void {
    const dialogRef = this.matDialog.open(ProfilePictureComponent, {
      width: '70%', height: '85%'
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('emailId');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    //localStorage.clear();
    this.router.navigate(['/login']);
  }


}