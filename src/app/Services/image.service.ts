import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { httpUrl } from "./user.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ImageService {

    constructor(private http: HttpClient) {}
  
  
    public uploadImage(images: File[]): Observable<any> {
      const formData = new FormData();
      
      Array.from(images).forEach((image) => { formData.append('files', image); });
  
      return this.http.post(ImageUploadUrl, formData);
    }
  }

  export const ImageUploadUrl = httpUrl + 'operation/upload/images';