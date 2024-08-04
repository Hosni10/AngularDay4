import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    {path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:"product",pathMatch:"full"},
        {path:'product',component:ProductsComponent},
        {path:'details/:id',component:ProductDetailsComponent},
        {path:'home',component:HomeComponent},
        {path:'about',component:AboutUsComponent},
        {path:'contact',component:ContactUsComponent},
        {path:'cart',component:CartPageComponent},
        {path:'form',component:FormComponent},
    ]},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'**',component:PageNotFoundComponent}


];
