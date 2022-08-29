import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  // A flag property to the Add button and it and it is false if the 'Add' button is displayed
  addBtnClicked: boolean = false;

  constructor(private uiService: UiServiceService) { 
    this.uiService.subjectAsObservable()
    .subscribe(value => {this.addBtnClicked = value; console.log(this.addBtnClicked)});
  }

  ngOnInit(): void {
  }

  toggleFormAndBtn()
  {
    this.uiService.prepareSubject();
  }

}
