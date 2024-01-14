import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FilesUploadUrl, UploadService } from '../Services/upload.service';
import { NotificationService, NotificationType } from '../Services/notification.service';


@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnDestroy, OnInit, OnChanges, AfterViewInit, AfterViewChecked, DoCheck {
  documents!: File[];

  constructor(protected uploadService: UploadService, protected notificationService: NotificationService){
    console.log('in constructor')
  }
  ngDoCheck(): void {
    console.log('inside do check. checking if u need anything')

    if(this.documents?.length>0){
      console.log('document selected or unselected');
    }
  }
  ngAfterViewInit(): void {
    console.log('inside afterviewinit. view loading complete.')
  }

  ngAfterViewChecked(): void {
    console.log('inside afterviewchecked. view display complete - in GUI')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside onchanges - something changed');
  }
  ngOnInit(): void {
    console.log('inside oninit');
  }
  ngOnDestroy(): void {
    console.log('destroying');
  }

  selectDocuments(event: any){
    if(event.target.files.length > 0){
      console.log('in selectdocument step');
      this.documents = event.target.files;
    }
  }

  onSubmit(e: any){
    e.preventDefault();
    this.uploadService.upload(this.documents, FilesUploadUrl).subscribe({
      next: result=>{
        this.notificationService.sendMessage({message: 'Files Uploaded successfully', type: NotificationType.success});
        
      },
      error: error=>{
        this.notificationService.sendMessage({message: 'Files could not be uploaded: ' + error.error.msg, type: NotificationType.error});
      }
    })
  }
}


