import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImagesUploadUrl, UploadService } from '../Services/upload.service';
import { DocumentUploadComponent } from '../document-upload/document-upload.component';
import { NotificationType } from '../Services/notification.service';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent extends DocumentUploadComponent implements OnDestroy {
 
  override onSubmit(e: any){
    e.preventDefault();
    this.uploadService.upload(this.documents, ImagesUploadUrl).subscribe({
      next: (result: any)=>{
        this.notificationService.sendMessage({message: 'Images Uploaded successfully', type: NotificationType.success});
        
      },
      error: (error: any)=>{
        this.notificationService.sendMessage({message: 'Images could not be uploaded: ' + error.error.msg, type: NotificationType.error});
      }
    })
  }
}


