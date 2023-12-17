import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnDestroy {
  images!: File[];

  constructor(private imageService: ImageService){}
  ngOnDestroy(): void {
    debugger;
  }

  selectImage(event: any){
    if(event.target.files.length > 0){
      this.images = event.target.files;
    }
  }

  onSubmit(){
    this.imageService.uploadImage(this.images).subscribe({
      next: result=>{
        console.log('image uploaded successfully-', result);
      },
      error: error=>{
        console.log('Event could not be updated', error);
      }
    })
  }
}


