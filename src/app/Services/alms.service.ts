import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { ServerUrl } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AlmsService extends EventService{
    override operationUrl = ServerUrl + 'operation/alms/';
    //operationUrl = httpUrl + 'operation/event/';
    override AddOperationUrl = this.operationUrl + 'add';
    override EditOperationUrl = this.operationUrl + 'edit';
    override DeleteOperationUrl = this.operationUrl + 'delete';
    override GetOperationUrl = this.operationUrl + 'all';
}