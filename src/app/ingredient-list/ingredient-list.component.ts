import { Component, OnInit,Input } from '@angular/core';
import {Ingredient} from './../Ingredient';
@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

constructor() { }
@Input('ingredient') ingredient:Ingredient;
  ngOnInit() {
  }
addDetails():void{
  console.log('add button clicked');
  
}
}
