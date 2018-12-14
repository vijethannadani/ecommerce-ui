import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
public prod;



  constructor(private productservice: ProductsService) { }

  ngOnInit() {
this.getProduct();
  }
  getProduct() {
  this.productservice.getProduct().subscribe(
    // tslint:disable-next-line:semicolon
    data => {this.prod = data },
    err => console.error(err),
    () => console.log('product loaded')
    );
}

}
