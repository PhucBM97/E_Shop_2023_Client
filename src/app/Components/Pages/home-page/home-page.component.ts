import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import { ProductDetailDTO } from 'src/app/Models/ProductDetailDTO.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products : ProductDetailDTO[] = [];
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
