import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public prodreg;

// tslint:disable-next-line:semicolon

constructor(private productservice: ProductsService , private route: ActivatedRoute) { }

  ngOnInit() {
     this.delprodreg(this.route.snapshot.params.prodid);
  }
  delprodreg(id: number) {
this.productservice.deleteUser(id).subscribe
(
  // tslint:disable-next-line:semicolon
  data => {this.prodreg = data },
    err => console.error(err),
    () => console.log('products  deleted')

);
}
}


