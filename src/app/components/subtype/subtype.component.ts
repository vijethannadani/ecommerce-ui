import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subtype',
  templateUrl: './subtype.component.html',
  styleUrls: ['./subtype.component.css']
})
export class SubtypeComponent implements OnInit {
  public prodreg;

// tslint:disable-next-line:semicolon

constructor(private productservice: ProductsService , private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getprodreg(this.route.snapshot.params.subtype);
  }
getprodreg(subtype: string) {
this.productservice.getProducsubtype(subtype).subscribe
(
  // tslint:disable-next-line:semicolon
  data => {this.prodreg = data },
    err => console.error(err),
    () => console.log('products  loaded')

);
}
}
