import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,HomeComponent,ContactUsComponent,PageNotFoundComponent,CartPageComponent,AboutUsComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DayFour';
}
