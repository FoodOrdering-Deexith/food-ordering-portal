import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/models/restaurant.model';
import { RestaurantService } from 'src/service/restaurant.service';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.scss'],
})
export class RestaurantlistComponent  implements OnInit {
  restaurants: Restaurant[] = [] ;


  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(
      (data:Restaurant[]) => {
        this.restaurants = data;
      },
      (error: any) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }

}
