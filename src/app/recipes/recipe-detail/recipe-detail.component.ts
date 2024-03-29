import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = new Recipe('empty', 'empty', 'empty', []);
  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(params['id']);
    });
  }
  toShoppingList() {
    this.recipe.ingredients.forEach((ingredient) => {
      this.shoppingService.addIngredient(ingredient);
    });
  }
}
