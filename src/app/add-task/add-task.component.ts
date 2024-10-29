import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  newTaskDescription = '';

  @Output() taskAdded = new EventEmitter<string>();

  onAddTask() {
    if(this.newTaskDescription){
      this.taskAdded.emit(this.newTaskDescription);
    }
    this.newTaskDescription = '';
  }

}
