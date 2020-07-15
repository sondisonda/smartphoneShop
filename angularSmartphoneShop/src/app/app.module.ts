import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { routingComponents } from './app-routing.module';
import { OrderComponent } from './components/order/order.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { A11yModule } from '@angular/cdk/a11y';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './components/store/store.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
   return new TranslateHttpLoader(httpClient);
}

//  Dzielisz na podstawie parent-child, czyli masz np. okno dialogowe i strone na której jest wyświetlane -> układ katalogów stona:
//    okno

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      NavigationComponent,
      HomeComponent,
      ProfileComponent,
      OrderComponent,
      routingComponents,
      StartPageComponent,
      StoreComponent
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
