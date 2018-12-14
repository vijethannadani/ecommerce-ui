import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormGroup, FormControl, Validators , ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';




@Component({
  selector: 'app-hai',
  templateUrl: './hai.component.html',
  styleUrls: ['./hai.component.css']
})
export class HaiComponent implements OnInit {
  models:  string[] =  [
    'Redmi',
    'Samsung',
    'Apple',
    'Oppo',
    'Gionee',
    'Nokia',
    'Lenovo',
    'Dell',
    'Hp',
    'puma'

    ];
    subs: string[] = [
      'shoes',
      'clothing',
      'mobiles',
      'laptop',
      'gadgets',
      'kids',
      'toys',
      'accessorise',
      'others'

    ];
    types: string[] = [
      'electronics',
      'fashion',
      'sports',
      'kids',
      'automobiles',
      'others'

    ];
 productform: FormGroup ;
// tslint:disable-next-line:quotemark
validMessage = " ";
public date;

  constructor(private productservice: ProductsService) { }


  ngOnInit() {
    this.productform = new FormGroup({
name: new FormControl('', [Validators.required, Validators.minLength(3)]),
type: new FormControl('', [Validators.required, Validators.minLength(3)]),
subtype: new FormControl('', [Validators.required, Validators.minLength(3)]),
brand: new FormControl('', [Validators.required, Validators.minLength(3)]),
cost: new FormControl(),
  date: new FormControl('', [Validators.required]),

    });
  }
  // makedate(selectedDate: Date) {
  //   this.productform.date = selectedDate;
  // }
  submitRegistration() {

    if ( this.productform.valid ) {
    this.validMessage = 'your product registration has to be submitted';
// tslint:disable-next-line:semicolon
this.productservice.createProductRegistration(this.productform.value).subscribe( )

}
// tslint:disable-next-line:one-line
else {
    this.validMessage = 'plese filL out the form before submitting ';
  }

}
// tslint:disable-next-line:eofline
}