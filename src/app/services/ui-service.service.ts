import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private subject = new Subject();
  addBtnClicked: boolean  = false;

  constructor() { }

  prepareSubject(): void
  {
    this.addBtnClicked = !this.addBtnClicked;
    this.subject.next(this.addBtnClicked);
  }

  subjectAsObservable(): Observable<any>
  {
    return this.subject.asObservable();
  }
}
