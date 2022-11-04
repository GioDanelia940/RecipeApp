import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class ShoppingService {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('oranges', 15),
    new Ingredient('strawberries', 25),
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }
  getIngredients() {
    return this.ingredients.slice();
  }
}
