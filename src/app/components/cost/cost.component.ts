import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {

    public prodreg;

  // tslint:disable-next-line:semicolon
  constructor(private productservice: ProductsService , private route: ActivatedRoute) { }
    ngOnInit() {
    }
    minmax(min: number , max: number) {
  this.productservice.getProductcost(min, max).subscribe
  (
    // tslint:disable-next-line:semicolon
    data => {this.prodreg = data },
      err => console.error(err),
      () => console.log('products  loaded')
  );
  }
  // tslint:disable-next-line:eofline
  }