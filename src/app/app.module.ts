import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.components';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { AdminComponent } from './components/admin/admin.component';
import { HaiComponent } from './components/hai/hai.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { throwError } from 'rxjs';
import { ViewComponent } from './components/view/view.component';
import { SearchComponent } from './components/search/search.component';
import { TypeComponent } from './components/type/type.component';
import { FormsModule } from '@angular/forms';


import { CostComponent } from './components/cost/cost.component';
import { BrandComponent } from './components/brand/brand.component';
import { SubtypeComponent } from './components/subtype/subtype.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component';
import { DateComponent } from './components/date/date.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';

// import { DatepickerPopupComponent } from './components/datepicker-popup/datepicker-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WelcomeComponent,
    HaiComponent,
    ViewComponent,
    SearchComponent,
    TypeComponent,
    BrandComponent,
    CostComponent,
    SubtypeComponent,
    DeleteComponent,
    UpdateComponent,
    DateComponent,
    CustomerComponent,
    ShopComponent,
    CartComponent,
    LoginComponent
    // DatepickerPopupComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // MyDatePickerModule,
RouterModule.forRoot([
  { path: 'add', component: HaiComponent },
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
{ path: 'products', component: AdminComponent},
{ path: 'productssearch', component: SearchComponent},
{ path: 'view', component: ViewComponent},
{ path: 'cost', component: CostComponent},
{ path: 'type', component: TypeComponent},
{ path: 'subtype', component: SubtypeComponent},
 { path: 'brand', component: BrandComponent},
 { path: 'products/delete/:prodid', component: DeleteComponent},
 { path: 'update/:prodid', component: UpdateComponent},
 { path: 'date', component: DateComponent},
 { path: 'customer', component: CustomerComponent},
 { path: 'shop', component: ShopComponent},
 { path: 'cart/:prodid', component: CartComponent},
 { path: 'cart/:prodname', component: CartComponent},
 { path: 'cart/:prodcost', component: CartComponent},
 { path: 'login', component:LoginComponent },


])
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
