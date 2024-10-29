import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input()
  tasks: Task[] = [];

  @Output()
  editer = new EventEmitter()

  onRemoveClick(id:number){
    for(let x = 0; x<this.tasks.length; x++){
      if(this.tasks[x].id == id){
        this.tasks.splice(x,1)
      }
    }
  }

  onEditClick(id:number){
    for(let x = 0; x<this.tasks.length; x++){
      if(this.tasks[x].id == id){
       this.editer.emit(this.tasks[x].description)
      }
    }

  }

}
