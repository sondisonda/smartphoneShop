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
import { routingComponents } from './app-routing.module';
import { OrderComponent } from './components/order/order.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule, MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { A11yModule } from '@angular/cdk/a11y';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './components/store/store.component';

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
      BrowserAnimationsModule,
      ReactiveFormsModule,
      BrowserModule,
      HttpClientModule,
      MatListModule,
      MatToolbarModule,
      MatSidenavModule,
      //  Materiale do innego modułu
      MatFormFieldModule,
      MatCheckboxModule,
      MatTableModule,
      MatPaginatorModule,
      BrowserAnimationsModule,
      MatSortModule,
      MatInputModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      ReactiveFormsModule,
      A11yModule,
      MatSelectModule,
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
