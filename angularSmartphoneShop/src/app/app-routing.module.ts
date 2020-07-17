import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/start-page/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent} from './components/start-page/register/register.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [

  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderComponent},
  {path: 'start-page', component: StartPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'store', component: StoreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ProfileComponent, LoginComponent, StoreComponent, OrderComponent, StartPageComponent, RegisterComponent]