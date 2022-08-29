import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  showForm: boolean = false;

  constructor(private uiService: UiServiceService ) { 
    this.uiService.subjectAsObservable().subscribe(value => this.showForm = value);
  }
  

  ngOnInit(): void {
  }

}
