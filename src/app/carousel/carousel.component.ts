import { Component, OnInit } from '@angular/core';
import { ImagesListUrl, UploadService } from '../Services/upload.service';

@Component({
  selector: 'app-carousel',
  template: `
  <div class="control-container">
      <ejs-carousel [dataSource]="images" cssClass="default-carousel" [autoPlay]="true" [buttonsVisibility]="'Visible'" width="50%">
        <ng-template #itemTemplate let-data>
          <div class="slide-content"></div>
          <figure class="img-container">
            <img [src]="data.url" alt="" style="width:50%;" />
            <figcaption class="img-caption"></figcaption>
          </figure>
        </ng-template>
      </ejs-carousel>
    </div>`,
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public images: Record<string, string | number>[] = [
  ];
  constructor(private uploadService: UploadService) { 
    this.uploadService.getFileList(ImagesListUrl).subscribe({
      next: (result)=>{
        this.images = result;
      },
      error: (error: any)=>{
        console.log('No Images Found', error);
      }
    });
  }

  ngOnInit(): void {
  }
  

}
