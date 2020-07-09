import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { routingComponents} from './app-routing.module';
import { OrderComponent } from './components/order/order.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

//  Uporządkuj sobie foldery, komponenty które będziesz używał w większej ilości miejsc możesz wrzucić do katalogu
// commons 
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
      StartPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
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
