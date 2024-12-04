import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { OrdersService } from 'src/service/orders.service';
import { Order } from 'src/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel]
})
export class OrdersPage implements OnInit{
  allOrders: Order[] = [];

  constructor(private orderService: OrdersService) {

   }
  ngOnInit(): void {
    this.getAllOrderforUserId("42fdf8a8-37da-4920-a338-3b790c9ad52b");
  }

  getAllOrderforUserId(userId: string) {
    this.orderService.getAllOrdersForUser(userId).subscribe(data => {
      this.allOrders = data;
      console.log(this.allOrders);
    });
  }

}
