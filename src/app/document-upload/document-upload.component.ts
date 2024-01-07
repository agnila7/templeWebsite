import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilesUploadUrl, UploadService } from '../Services/upload.service';
import { NotificationService, NotificationType } from '../Services/notification.service';


@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnDestroy {
  documents!: File[];

  constructor(protected uploadService: UploadService, protected notificationService: NotificationService){}
  ngOnDestroy(): void {
  }

  selectDocuments(event: any){
    if(event.target.files.length > 0){
      this.documents = event.target.files;
    }
  }

  onSubmit(e: any){
    e.preventDefault();
    this.uploadService.upload(this.documents, FilesUploadUrl).subscribe({
      next: result=>{
        this.notificationService.sendMessage({message: 'Files Uploaded successfully', type: NotificationType.success});
        
      },
      error: error=>{
        this.notificationService.sendMessage({message: 'Files could not be uploaded: ' + error.error.msg, type: NotificationType.error});
      }
    })
  }
}


