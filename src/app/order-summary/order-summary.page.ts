import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel]
})
export class OrderSummaryPage implements OnInit {
  order: any;

  constructor(private location: Location) { }

  ngOnInit() {
    const navigation: { orderSummary: any } = this.location.getState() as { orderSummary: any };
    if (navigation && navigation.orderSummary) {
      this.order = navigation.orderSummary;
      console.log(this.order);
    }
  }
}
