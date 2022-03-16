import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks!: Task[];
  
  constructor(private taskservice:TaskService) {
  
   
   }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe(res =>
      { console.log(res);
        this.tasks=res
      console.log(this.tasks,"task")
    });
      
      
  }

  deleteTask(task: Task){
    this.taskservice.deleteTasks(task).subscribe(()=>{
    this.tasks=this.tasks.filter((t) =>{
     return  t.id!= task.id
    })
    });
  }
  ToggleReminder(task:any){
    task.reminder= !task.reminder;
    console.log(task.reminder);
    this.taskservice.updateTaskReminder(task).subscribe();


  }

  addTask(newtask: Task){
    this.taskservice.postTask(newtask).subscribe((task: Task)=>{
      this.tasks.push(task);
    })

   
  }
  
  

}
