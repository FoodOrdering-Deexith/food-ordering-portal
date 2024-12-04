import { FoodItem } from "./food-item.model";
import { Restaurant } from "./restaurant.model";
import { User } from "./user.model";

export class Order {
  id?: string; // Using string for UUID in TypeScript
  orderNumber: number;
  foods: FoodItem[];
  total: number;
  restaurantDTO: Restaurant;
  userDTO: User;

  constructor() {
    this.id = ""; // Generate a UUID if needed
    this.orderNumber = 0;
    this.foods = [];
    this.total = 0.0;
    this.restaurantDTO = {} as Restaurant;
    this.userDTO = {} as User;
  }
}
