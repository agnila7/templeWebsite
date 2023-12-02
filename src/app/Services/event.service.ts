import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  addNewEvent(event: TempleEvent){
  }
}

export interface TempleEvent{
  date: string;
  time: string;
  eventName: string;
}
