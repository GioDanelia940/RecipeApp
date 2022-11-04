import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}
  @ViewChild('nameInput', { static: true })
  nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: true })
  amountInputRef!: ElementRef;
  ngOnInit(): void {}
  addItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    this.nameInputRef.nativeElement.value = '';
    const ingAmount = this.amountInputRef.nativeElement.value;
    this.amountInputRef.nativeElement.value = '';
    this.shoppingService.addIngredient(new Ingredient(ingName, ingAmount));
  }
}
