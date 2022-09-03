import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private uiService: UiServiceService, private router: Router) { 
    this.uiService.subjectAsObservable()
    .subscribe(value => {this.addBtnClicked = value});
  }

  ngOnInit(): void {
  }

  toggleFormAndBtn()
  {
    this.uiService.prepareSubject();
  }

  hasRouter(route: string): boolean
  {
    return this.router.url === route;
  }

}
