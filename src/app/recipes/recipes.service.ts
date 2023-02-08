import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Pizza description',
      'https://www.simplyrecipes.com/thmb/H6Xk6aHV-UFguZDuWtsAbcapj84=/2668x2001/smart/filters:no_upscale()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
      [(new Ingredient('tomato', 5), new Ingredient('potato', 5))]
    ),
    new Recipe(
      'Carbonara',
      'Carbonara description',
      'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg',
      [new Ingredient('tomato', 5), new Ingredient('potato', 5)]
    ),
  ];
  getRecipe(id: number) {
    return this.recipes[id];
  }
}
