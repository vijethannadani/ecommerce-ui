import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormGroup, FormControl, Validators , ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import 'rxjs/add/observable/throw';




@Component({
  selector: 'loginComponent-hai',
  templateUrl: './login.component.html'
 
})
export class LoginComponent implements OnInit {

 productform: FormGroup ;
// tslint:disable-next-line:quotemark
validMessage = " ";
public date;

  constructor(private productservice: ProductsService, private router:Router) { }


  ngOnInit() {
    this.productform = new FormGroup({
userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
Password: new FormControl('', [Validators.required, Validators.minLength(3)]),

    });
  }
 
 login() {
if(
  this.productform.value.userName==="vijeth" && this.productform.value.Password==="raju"
){
    this.router.navigate(['shop'])
}
  


}

}