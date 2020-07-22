import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/start-page/login/login.component';
import { RegisterComponent } from './views/start-page/register/register.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { StartPageComponent } from './views/start-page/start-page.component';
import { ProfileComponent } from './views/user-views/profile/profile.component';
import { routingComponents } from './app-routing.module';
import { OrderComponent } from './views/user-views/order/order.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { A11yModule } from '@angular/cdk/a11y';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import {SmartphoneListComponent} from './views/admin-views/smartphone-list/smartphone-list.component';
import { SmartphoneWindowComponent } from './views/admin-views/smartphone-list/smartphone-window/smartphone-window.component';
import { ConfirmDialogComponent } from './views/confirm-dialog/confirm-dialog.component';
import { UserWindowComponent } from './views/admin-views/user-list/user-window/user-window.component';
import { OrderListComponent } from './views/admin-views/order-list/order-list.component';
import { OrderWindowComponent } from './views/admin-views/order-list/order-window/order-window.component';
import { StoreComponent } from './views/user-views/store/store.component';

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

   ],
   entryComponents: [

      SmartphoneWindowComponent,
      ConfirmDialogComponent,
      UserWindowComponent,
      OrderWindowComponent,
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
