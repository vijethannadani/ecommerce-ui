import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  public prodreg;

// tslint:disable-next-line:semicolon

constructor(private productservice: ProductsService , private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getprodreg(this.route.snapshot.params.type);
  }
getprodreg(type: string) {
this.productservice.getProductyp(type).subscribe
(
  // tslint:disable-next-line:semicolon
  data => {this.prodreg = data },
    err => console.error(err),
    () => console.log('products  loaded')

);
}
}
