import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-err-page',
  templateUrl: './err-page.component.html',
  styleUrls: ['./err-page.component.scss']
})
export class ErrPageComponent {
  products : any;
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getAll(1,5).subscribe(res => {
      this.products = res;
    },
    err => {
      console.log("Lỗi");
    });
  }
}
