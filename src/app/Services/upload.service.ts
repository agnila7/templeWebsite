import { HttpClient, HttpHeaders,  } from "@angular/common/http";
import { Observable } from "rxjs";
import { ServerUrl } from "./user.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UploadService {

    constructor(private http: HttpClient) {}
  
  
    public upload(files: File[], uploadUrl: string): Observable<any> {
      const formData = new FormData();
      
      Array.from(files).forEach((file) => { formData.append('files', file, file.name); });
  
      return this.http.post(uploadUrl, formData);
    }

    public getFileList(url: string): Observable<any> {
  
      return this.http.get(url);
    }

  }

  export const FilesUploadUrl = ServerUrl + 'operation/upload/files';
  export const ImagesUploadUrl = ServerUrl + 'operation/upload/images';
  export const ImagesListUrl = ServerUrl + 'list/images';
  export const FilesListUrl = ServerUrl + 'list/files';