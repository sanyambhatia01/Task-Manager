import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
  public taskData = [];
  public taskName = '';
  public status = '';
  getTaskName(event){
  this.taskName = event.target.value;
  }
  getStatus(event){
    this.status = event.target.value;
  }
  onAddClick(){
  let obj={
    taskName:this.taskName,
    status:this.status
  }
  this.taskData.push(obj);
   
  }
  onDeleteButton(taskName){
    let result = this.taskData.filter((TASK) => TASK.taskName !== taskName);
      this.taskData = result;
  }
  }
  
