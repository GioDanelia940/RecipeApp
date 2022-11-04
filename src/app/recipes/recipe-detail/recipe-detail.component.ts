import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe('empty', 'empty', 'empty', []);
  constructor(private shoppingService: ShoppingService) {}
  ngOnInit(): void {}
  toShoppingList() {
    this.recipe.ingredients.forEach((ingredient) => {
      this.shoppingService.addIngredient(ingredient);
    });
  }
}
