import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Panner Manchuri', 'This is tasty as hell', 'https://www.vegrecipesofindia.com/wp-content/uploads/2011/10/kadai-paneer-recipe-580x580.jpg'), 
    new Recipe('Indian Thali', 'This is one of my favorite food', 'https://picturetherecipe.com/wp-content/uploads/2020/07/Butter-Chicken-PTR-Featured-395x500.jpg')
  ];

   @Output() recipeWasSelected = new EventEmitter<Recipe>();  


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
