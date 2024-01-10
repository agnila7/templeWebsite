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
   ///// upload the image in server- similar to how document gets uploaded
  }
}


