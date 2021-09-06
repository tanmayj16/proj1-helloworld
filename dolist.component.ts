import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
@Component({
  selector: 'app-dolist',
  templateUrl: './dolist.component.html',
  styleUrls: ['./dolist.component.css']
})
export class DolistComponent implements OnInit {

  title = 'Angular App';
  name = "Tanmay";
  
  todoValue:string;
  list: Todo[];

  ngOnInit(){
    this.list=[];
    this.todoValue="";

  }

  addItem(){
    if(this.todoValue!== ""){
      const newItem: Todo={
        id:Date.now(),
        value: this.todoValue,
        isDone: false
      };

      this.list.push(newItem);
      
    }

    this.todoValue="";

  }

  deleteItem(id:number){
    this.list=this.list.filter(item =>item.id !== id);
    
  }
  
}

