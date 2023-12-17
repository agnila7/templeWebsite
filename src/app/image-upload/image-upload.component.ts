import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  images!: File[];

  constructor(private imageService: ImageService){}

  selectImage(event: any){
    if(event.target.files.length > 0){
      this.images = event.target.files;
    }
  }

  onSubmit(){
    this.imageService.uploadImage(this.images).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }
}


