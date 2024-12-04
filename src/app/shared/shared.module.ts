import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [RestaurantlistComponent, FoodItemComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  providers: [
  ],
  exports:[RestaurantlistComponent, FoodItemComponent]
})
export class SharedModule { }
