import { FoodType } from '../models/food-type.model'; // Assuming FoodType is in a separate file

export interface FoodItem {
  uuid: string; // UUIDs are represented as strings in TypeScript
  name: string;
  description: string;
  price: number;
  restaurantId: string; // UUID for restaurant
  type: FoodType; // Enum for FoodType
  quantity: number; // Default to 0 if not set
}
