import { Injectable } from '@angular/core';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
const httpOptions = {
headers: new HttpHeaders({'Content-Type': 'application/json' })
};
@Injectable()
export class ProductsService {
 url = '/server/deletproducts';
 uurl = '/server/updateproducts';
  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get('/server/products');
    }
    getProduc(id: number) {
      return this.http.get('/server/productsbyid/' + id );
      }
      getProductyp(type: string) {
        return this.http.get('/server/type/' + type );
        }
        getProducsubtype(subtype: string) {
          return this.http.get('/server/subtype/' + subtype );
          }
          getProductbrand(brand: string) {
            return this.http.get('/server/brand/' + brand );
            }
            getProductcost(min: number , max: number) {
              return this.http.get('/server/prize/range/' + min + ' /' + max );
              }
              dateUser(prod1: Date, prod2: Date) {
                return this.http.get('/server/date/range/' + prod1 + ' /' + prod2 );
                }
  updateUser(user) {
    // let body = JSON.stringify(user);
    return this.http.put(this.getUserUrlup(user.id), user , httpOptions);
  }
  private getUserUrlup(id) {
    return this.uurl + '/' + id;
  }
  deleteUser(id: number) {
    // tslint:disable-next-line:whitespace
    return this.http.delete('/server/deletproducts/' +id);
      // .map(res => res.json());
  }

  createCustomerRegistration(customer) {


    const body = JSON.stringify(customer);
        return this.http.post('/server/addcustomer', body , httpOptions);
      }
      addcart(cart) {

        const body = JSON.stringify(cart);
        return this.http.post('/server/addcart', body , httpOptions);

      }

  createProductRegistration(product) {

// tslint:disable-next-line:prefer-const
let body = JSON.stringify(product);
    return this.http.post('/server/addproducts', body , httpOptions);
  }
}
