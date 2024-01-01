import { Component, OnInit } from '@angular/core';
import { FilesListUrl, UploadService } from '../Services/upload.service';

@Component({
  selector: 'app-file-downloader',
  templateUrl: './file-downloader.component.html',
  styleUrls: ['./file-downloader.component.css']
})
export class FileDownloaderComponent implements OnInit {

  files: File[] =[];
  constructor(private uploadService: UploadService) { 
    this.uploadService.getFileList(FilesListUrl).subscribe({
      next: (result: File[])=>{
        this.files = result;
      },
      error: (error: any)=>{
        console.log('No File Found', error);
      }
    });
  }

  ngOnInit(): void {
  }

  select(file:File): void {
    window.location.href = file.url;
  }

}

export type File = {
  Name: string,
  url: string
}


