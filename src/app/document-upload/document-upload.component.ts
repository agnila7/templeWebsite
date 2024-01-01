import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilesUploadUrl, UploadService } from '../Services/upload.service';


@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnDestroy {
  documents!: File[];

  constructor(protected uploadService: UploadService){}
  ngOnDestroy(): void {
    debugger;
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
        console.log('Files Uploaded successfully-', result);
      },
      error: error=>{
        console.log('Files could not be uploaded', error);
      }
    })
  }
}


