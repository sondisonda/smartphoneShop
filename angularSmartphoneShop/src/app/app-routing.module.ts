import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/start-page/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent} from './components/start-page/register/register.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { SmartphoneListComponent } from './components/admin-lists/smartphone-list/smartphone-list.component';
import { UserListComponent} from 'src/app/components/admin-lists/user-list/user-list.component';
import { OrderListComponent} from 'src/app/components/admin-lists/order-list/order-list.component';

const routes: Routes = [


  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderComponent},
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
                                  StartPageComponent,
                                  RegisterComponent ] 