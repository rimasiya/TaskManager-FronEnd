import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from '../../User-Service/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{


  addtaskForm:any;

  users:User[]=[]

  constructor( private Taskserive:TaskService,private fb:FormBuilder,private router:Router,private userservice:UserService){
    this.addtaskForm=this.fb.group({
      title:['',[Validators.required]],
      description:[''],
      dueDate:[''],
      Priority:['',[Validators.required]],
      assigneeId:['']
    })

  }
  ngOnInit(): void {
   this.userservice.getuser().subscribe(data=>{
    this.users=data;
   })
  }

  task:any;


  onAddTask(){
    this.task=(this.addtaskForm.value);
    this.Taskserive.createTask(this.task).subscribe(data=>{
      this.router.navigate(['/'])
    })
  } 

  
  cancel(){

  }
}
