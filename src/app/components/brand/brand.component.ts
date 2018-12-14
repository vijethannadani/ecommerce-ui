import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  public prodreg;

  // tslint:disable-next-line:semicolon
  constructor(private productservice: ProductsService , private route: ActivatedRoute) { }
    ngOnInit() {
     // this.getprodreg(this.route.snapshot.params.brand);
    }
  getprodreg(brand: string) {
  this.productservice.getProductbrand(brand).subscribe
  (
    // tslint:disable-next-line:semicolon
    data => {this.prodreg = data },
      err => console.error(err),
      () => console.log('products  loaded')
  );
  }
  // tslint:disable-next-line:eofline
  }