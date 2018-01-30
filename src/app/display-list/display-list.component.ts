import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
 // list:any[];
 //  constructor() {
 //    this.list=[];
 //    this.list.push({"name": "india", "quantity": 3},{ "name": "LA", "quantity": 2});
 //  }
userform = new FormGroup({
url: new FormControl("url",Validators.required),
ingredients: new FormGroup({
  name: new FormControl(),
  quantity: new FormControl()
})
})
  ngOnInit() {

  }
  onSubmit(){
    console.log(this.userform.value);
  }
// onCribSubmit(data):void{
//   console.log(data);
// }
}
