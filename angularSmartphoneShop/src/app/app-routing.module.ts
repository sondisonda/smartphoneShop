import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './application/views/user-views/profile/profile.component';
import { LoginComponent } from './application/views/start-page/login/login.component';
import { OrderComponent } from './application/views/user-views/order/order.component';
import { RegisterComponent} from './application/views/start-page/register/register.component';
import { StartPageComponent } from './application/views/start-page/start-page.component';
import { SmartphoneListComponent } from './application/views/admin-views/smartphone-list/smartphone-list.component';
import { UserListComponent} from 'src/app/application/views/admin-views/user-list/user-list.component';
import { OrderListComponent} from 'src/app/application/views/admin-views/order-list/order-list.component';
import { StoreComponent } from './application/views/user-views/store/store.component';

const routes: Routes = [


  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderComponent},
  {path: 'store', component: StoreComponent},
  {path: 'start-page', component: StartPageComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'smartphone-list', component: SmartphoneListComponent},
  {path: 'order-list', component: OrderListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ ProfileComponent,
                                  LoginComponent, 
                                  UserListComponent, 
                                  SmartphoneListComponent,
                                  OrderComponent,
                                  StoreComponent,
                                  StartPageComponent,
                                  RegisterComponent ] 