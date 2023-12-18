import { HttpClient, HttpHeaders,  } from "@angular/common/http";
import { Observable } from "rxjs";
import { httpUrl } from "./user.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UploadService {

    constructor(private http: HttpClient) {}
  
  
    public upload(files: File[], uploadUrl: string): Observable<any> {
      const formData = new FormData();
      
      Array.from(files).forEach((file) => { formData.append('files', file, file.name); });
  
      return this.http.post(uploadUrl, formData);
    }
  }

  export const FilesUploadUrl = httpUrl + 'operation/upload/files';
  export const ImagesUploadUrl = httpUrl + 'operation/upload/images';