import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/start-page/login/login.component';
import { RegisterComponent } from './components/start-page/register/register.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { routingComponents } from './app-routing.module';
import { OrderComponent } from './components/order/order.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { A11yModule } from '@angular/cdk/a11y';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import {StoreComponent} from './components/store/store.component';
import { SmartphoneWindowComponent } from './components/store/smartphone-window/smartphone-window.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

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
      StoreComponent,
      OrderComponent,
      routingComponents,
      StartPageComponent,
      SmartphoneWindowComponent,
      ConfirmDialogComponent
   ],
   entryComponents: [

      SmartphoneWindowComponent,
      ConfirmDialogComponent,
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
