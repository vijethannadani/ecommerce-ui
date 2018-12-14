import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public prodreg;
  public pageid;

  constructor(private productservice: ProductsService , private route: ActivatedRoute) { }

    ngOnInit() {
      this.getprodreg(this.route.snapshot.params.id);
    }
  getprodreg(id: number) {
  this.productservice.getProduc(id).subscribe
  (
    // tslint:disable-next-line:semicolon
    data => {this.pageid = data },
      err => console.error(err),
      () => console.log('products  loaded')

  );
  }
  }
