import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'explore',
        loadComponent: () =>
          import('../explore/explore.page').then((m) => m.ExplorePage),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('../orders/orders.page').then((m) => m.OrdersPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];
