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
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productform: FormGroup;



 public prodreg;
   errorMessage: any;



 constructor(private fb: FormBuilder, private productservice: ProductsService , private route: ActivatedRoute) { }


 getprodreg(prodid: number) {
  this.productservice.getProduc(prodid).subscribe
  (
    // tslint:disable-next-line:semicolon
    data => {this.prodreg = data },
      err => console.error(err),
      () => console.log('products  loaded')

  );
  }
  view() {
    this.productform.patchValue({
      name: this.prodreg.name,
      type: this.prodreg.type,
      subtype: this.prodreg.subtype,
      brand: this.prodreg.brand,
      cost: this.prodreg.cost,
      date: this.prodreg.date
  });
  }

   ngOnInit() {

    this.productform = this.fb.group({
      // id: this.route.snapshot.params.prodid;
      name: new FormControl('', [Validators.required, Validators.minLength(3)] ),
      type: new FormControl('', [Validators.required, Validators.minLength(3)]),
      subtype: new FormControl('', [Validators.required, Validators.minLength(3)]),
      brand: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cost: new FormControl(),
      date: new FormControl(''),
          });
          this.getprodreg(this.route.snapshot.params.prodid);
   }



 saveProduct(): void {
 if (this.productform.dirty && this.productform.valid) {

     const p = Object.assign({}, this.prodreg ,  this.productform.value);

     this.productservice.updateUser(p)
         .subscribe();

 }
 }
}
