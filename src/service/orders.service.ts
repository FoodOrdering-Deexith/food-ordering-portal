import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

//   getOrders() {
//     this.http.get('url')
//     .map((res: Response) => {
//       res.json();
//   })
// }

//   createOrder() {
//     this.http.post('url')
//     .map((res: Response) => {
//       res.json();
//   })
//   }
}
