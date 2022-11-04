import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}
  ingredients: Ingredient[] = [];
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }
}
