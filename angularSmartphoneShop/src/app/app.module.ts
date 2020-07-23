import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './application/views/start-page/login/login.component';
import { RegisterComponent } from './application/views/start-page/register/register.component';
import { NavigationComponent } from './application/views/navigation/navigation.component';
import { StartPageComponent } from './application/views/start-page/start-page.component';
import { ProfileComponent } from './application/views/user-views/profile/profile.component';
import { routingComponents } from './app-routing.module';
import { OrderComponent } from './application/views/user-views/order/order.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { A11yModule } from '@angular/cdk/a11y';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import {SmartphoneListComponent} from './application/views/admin-views/smartphone-list/smartphone-list.component';
import { SmartphoneWindowComponent } from './application/views/admin-views/smartphone-list/smartphone-window/smartphone-window.component';
import { ConfirmDialogComponent } from './application/views/confirm-dialog/confirm-dialog.component';
import { UserWindowComponent } from './application/views/admin-views/user-list/user-window/user-window.component';
import { OrderListComponent } from './application/views/admin-views/order-list/order-list.component';
import { OrderWindowComponent } from './application/views/admin-views/order-list/order-window/order-window.component';
import { StoreComponent } from './application/views/user-views/store/store.component';
import { StoreWindowComponent } from './application/views/user-views/store/store-window/store-window.component';
import { NewOrderWindowComponent} from './application/views/user-views/store/new-order-window/new-order-window.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
   return new TranslateHttpLoader(httpClient);
}

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      NavigationComponent,
      ProfileComponent,
      SmartphoneListComponent,
      OrderComponent,
      routingComponents,
      StartPageComponent,
      SmartphoneWindowComponent,
      ConfirmDialogComponent,
      UserWindowComponent,
      OrderListComponent,
      OrderWindowComponent,
      StoreComponent,
      StoreWindowComponent,
      NewOrderWindowComponent,

   ],
   entryComponents: [

      SmartphoneWindowComponent,
      ConfirmDialogComponent,
      UserWindowComponent,
      OrderWindowComponent,
      StoreWindowComponent,
      NewOrderWindowComponent,

    ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AngularMaterialModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      FormsModule ,
      ReactiveFormsModule,
      A11yModule,
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
         }
      }),

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
