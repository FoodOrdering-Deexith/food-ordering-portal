import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { FoodItem } from 'src/models/food-item.model';


@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor(private http: HttpClient) { }

  getAllFoods(restaurantId: string | undefined): Observable<FoodItem[]> {
    return this.http.get<{foodItemList: FoodItem[]}>(`${environment.foodCatalogService}/v1/food-catalog/${restaurantId}/foods`).pipe(
      map((response) => response.foodItemList) // Adjust this if your API structure differs
    );
  }
}
