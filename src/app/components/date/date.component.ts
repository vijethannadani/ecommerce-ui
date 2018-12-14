import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  public prodreg;
  route: any;



  constructor(private productservice: ProductsService) { }

  ngOnInit() {

   // this.dateProduct(this.route.snapshot.params.prod1, this.route.snapshot.params.prod2);
  }
  dateba(prod1: Date, prod2: Date) {

    this.productservice.dateUser(prod1, prod2).subscribe
    (
      // tslint:disable-next-line:semicolon
      data => {this.prodreg = data },
        err => console.error(err),
        () => console.log('product is loaded')

    );
    }
  }
