import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImagesUploadUrl, UploadService } from '../Services/upload.service';
import { DocumentUploadComponent } from '../document-upload/document-upload.component';
import { NotificationType } from '../Services/notification.service';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})



// In the context of class inheritance, 'extends' is used to create a subclass that inherits properties and methods from a base class.
// export class ImageUploadComponent extends DocumentUploadComponent implements OnDestroy {
  export class ImageUploadComponent extends DocumentUploadComponent implements OnDestroy {
 
    override onSubmit(e: any){
      // console.log('uploading image by overriding document');
      e.preventDefault();
      this.uploadService.upload(this.documents, ImagesUploadUrl).subscribe({
        next: result=>{
          this.notificationService.sendMessage({message: 'Images Uploaded successfully', type: NotificationType.success});
          
        },
        error: error=>{
          this.notificationService.sendMessage({message: 'Images could not be uploaded: ' + error.error.msg, type: NotificationType.error});
        }
      })
     ///// upload the image in server- similar to how document gets uploaded
    }
  
    
}



