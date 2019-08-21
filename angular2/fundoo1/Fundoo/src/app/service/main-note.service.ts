import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteService } from './note.service';

@Injectable({
  providedIn: 'root'
})
export class MainNoteService {

  constructor(private http: HttpClient, private noteService:NoteService) { }

  public createNote(data: any)
  {
    return this.noteService.createNote("createNote",data);
  }

  public getArchiveNote()
  {
    return this.noteService.getRequest("getArchieve");
  }

  public pinNote(data1:any)
  {
    return this.noteService.putRequest("pinned?noteId="+data1,"");
  }

  public archiveNote(data:any)
  {
    return this.noteService.putRequest("archieved?noteId="+data,"");
  }

  public allUnpinAndUnarchive()
  {
    return this.noteService.getRequest("getUnPinAndUnArchive"); 
  }

  public trashNote(data:any)
  {
      return this.noteService.putRequest("deleteNote?noteId="+data, "")
  }

  public getPin()
  {
    return this.noteService.getRequest("getPin");
  }

  public restoreNote(data:any)
  {
    return this.noteService.putRequest("getTrashNote?noteId="+data,"");
  }

  public getTrash()
  {
    return this.noteService.getRequest("getTrash");
  }

  public permenantlyDeleteNote(data:any)
  {
    return this.noteService.putRequest("permenantlyDeleted?noteId="+data, "");
  }
}
