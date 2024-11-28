import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Restaurant } from 'src/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  constructor(private http: HttpClient) {
    console.log("htest");
  }

  getAllRestaurants():Observable<Restaurant[]>  {
    return this.http.get<Restaurant[]>(`${environment.restaurant}/v1/restaurant`);
  }
}
