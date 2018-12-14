import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName, FormArray, FormBuilder } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productform: FormGroup;
cartform: FormGroup;


 public prodreg;
   errorMessage: any;
   public pro;



 constructor(private fb: FormBuilder, private productservice: ProductsService , private route: ActivatedRoute) { }


 getprodreg(prodid: number) {
  this.productservice.getProduc(prodid).subscribe
  (
    // tslint:disable-next-line:semicolon
    data => {this.prodreg = data },

      err => console.error(err),
      () => console.log('products id loaded')

  );
  }


   ngOnInit() {

    this.productform = this.fb.group({
      id: this.route.snapshot.params.prodid,
      name:  this.route.snapshot.params.prodname,
      cost:  this.route.snapshot.params.prodcost,
      c_id: new FormControl(),
          });
          this.getprodreg(this.route.snapshot.params.prodid);
   }

   takecusid(cid: number): void {
this.pro = this.fb.group({
  c_id: cid,
});
  }

 saveProduct(): void {
this.cartform = this.fb.group({
  cname : this.prodreg.name,
  ccost: this.prodreg.cost,

});



     console.log(this.pro.c_id);

     this.productservice.addcart(this.cartform.value)
         .subscribe();


 }
}
