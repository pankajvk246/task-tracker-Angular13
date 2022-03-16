import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task ;
  @Output() deleteTask: EventEmitter<Task>=new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task>=new EventEmitter();

  fatimes=faTimes

  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
    console.log(this.task)
  }
  onDelete(task:any){
    this.deleteTask.emit(task)
  }
  onToggle(task:any){
    this.onToggleReminder.emit(task);
    console.log("toggle")

  }

}
