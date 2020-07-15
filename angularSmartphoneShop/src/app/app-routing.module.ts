import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent} from './components/register/register.component';
import { StoreComponent } from './components/store/store.component';
import { StartPageComponent } from './components/start-page/start-page.component';

const routes: Routes = [

  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderComponent},
  {path: 'start-page', component: StartPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'store', component: StoreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ProfileComponent, HomeComponent, LoginComponent, OrderComponent, StartPageComponent, RegisterComponent]