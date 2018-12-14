import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
public prodreg;

// tslint:disable-next-line:semicolon

constructor(private productservice: ProductsService , private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getprodreg(this.route.snapshot.params.id);
  }
getprodreg(id: number) {
this.productservice.getProduc(id).subscribe
(
  // tslint:disable-next-line:semicolon
  data => {this.prodreg = data },
    err => console.error(err),
    () => console.log('products  loaded')

);
}
}
