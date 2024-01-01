import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImagesUploadUrl, UploadService } from '../Services/upload.service';
import { DocumentUploadComponent } from '../document-upload/document-upload.component';


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
        console.log('Image uploaded successfully-', result);
      },
      error: (error: any)=>{
        console.log('Images could not be uploaded', error);
      }
    })
  }
}


