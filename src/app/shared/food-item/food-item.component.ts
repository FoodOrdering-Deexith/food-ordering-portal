import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { restaurant } from 'ionicons/icons';
import { FoodItem } from 'src/models/food-item.model';
import { Restaurant } from 'src/models/restaurant.model';
import { FoodListService } from 'src/service/food-list.service';
import { OrdersService } from 'src/service/orders.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent  implements OnInit {
  @Input()
  restaurantId: string | undefined;

  @Input()
  restaurant: Restaurant | undefined;
  foods: FoodItem[] = [];
  foodCart: Map<string, FoodItem> = new Map();

  constructor(private foodService: FoodListService, private orderService: OrdersService, private router: Router) { }

  ngOnInit() {
    this.foodService.getAllFoods(this.restaurantId).subscribe(
      (data:FoodItem[]) => {
        this.foods = data;
      },
      (error: any) => {
        console.error('Error fetching foods:', error);
      }
    );
  }

  addToOrder(index: number){
    let currentFoodItem = this.foods[index];
    currentFoodItem.quantity++;
    this.foodCart.set(currentFoodItem.uuid, currentFoodItem);
  }

  subtractFromOrder(index: number){
    let currentFoodItem = this.foods[index];
    if (currentFoodItem.quantity === 0)  {
      this.foodCart.delete(currentFoodItem.uuid);
    } else {
      currentFoodItem.quantity--;
    this.foodCart.set(currentFoodItem.uuid, currentFoodItem);
    }
  }

  placeOrder() {
    const foodInCart = Array.from(this.foodCart.values());
    let total = 0;
    foodInCart.forEach(food => {
      total += food.price * food.quantity;
    })
    const userId = "42fdf8a8-37da-4920-a338-3b790c9ad52b"
    this.orderService.placeOrder(foodInCart, userId, total, this.restaurant).subscribe((orderSummary: any) => {
      this.router.navigate([`/order-summary/${orderSummary?.id}`], { state: { orderSummary } });
    });
  }
}
