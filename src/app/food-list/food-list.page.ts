import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline, removeCircleOutline } from 'ionicons/icons';
import { Restaurant } from 'src/models/restaurant.model';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.page.html',
  styleUrls: ['./food-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule]
})

export class FoodListPage implements OnInit {
  restaurant: Restaurant | undefined;
  restaurantId: string = "";

  constructor(private location: Location, private route: ActivatedRoute) {
    addIcons({addCircleOutline, removeCircleOutline});
  }

  ngOnInit() {
    this.restaurantId = this.route.snapshot.paramMap.get('id')!;
    const navigation: { restaurant: Restaurant } = this.location.getState() as { restaurant: Restaurant };
    if (navigation && navigation.restaurant) {
      this.restaurant = navigation.restaurant;
    }
  }
}
