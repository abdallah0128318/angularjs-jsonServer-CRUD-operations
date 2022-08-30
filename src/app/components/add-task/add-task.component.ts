import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  showForm: boolean = false;
  text:string;
  day: string;
  reminder: boolean;
  error: string = '';

  // this is a custom event to be triggered at the tasks component template just to 
  // call all 'TaskService' methods at the tasks.component.ts file

  @Output() addTask = new EventEmitter();

  constructor(private uiService: UiServiceService ) { 
    this.uiService.subjectAsObservable().subscribe(value => this.showForm = value);
  }
  

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(!this.text || !this.day)
    {
      this.error = 'Please, Enter a task and a date';
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.addTask.emit(newTask);

    this.error = '';
    this.text = '';
    this.day = '';
    this.reminder = false;
    
  }

}
