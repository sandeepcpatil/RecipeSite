import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }
  @Output() recipeSelected = new EventEmitter<void>();

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeSelected.emit();
  }
}
