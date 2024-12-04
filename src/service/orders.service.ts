import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { FoodItem } from 'src/models/food-item.model';
import { Order } from 'src/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  getAllOrdersForUser(userId: string) {
    return this.http.get<Order[]>(`${environment.orderService}/v1/order?userId=${userId}`);
  }


  placeOrder(foodInCart: FoodItem[], userId: string, total: number, restaurant: import("../models/restaurant.model").Restaurant | undefined) {
   const body = {
    "userId":userId,
    "restaurantDTO":restaurant,
    "foods":foodInCart,
    "total": total
   }
   return this.http.post(`${environment.orderService}/v1/order`, body);
  }

  constructor(private http: HttpClient) { }
}
