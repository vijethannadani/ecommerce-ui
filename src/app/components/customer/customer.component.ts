import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormGroup, FormControl, Validators , ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Component({
  selector: 'app-cost',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    customerform: FormGroup ;
    public prodreg;
    validMessage = ' ';

  // tslint:disable-next-line:semicolon
  constructor(private productservice: ProductsService ) { }
    ngOnInit() {
        this.customerform = new FormGroup({
    c_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    c_ph: new FormControl('', [Validators.required, Validators.minLength(3)]),
    c_add: new FormControl('', [Validators.required, Validators.minLength(10)]),


        });
      }


  submit() {


this.productservice.createCustomerRegistration(this.customerform.value).subscribe( );


}

}


