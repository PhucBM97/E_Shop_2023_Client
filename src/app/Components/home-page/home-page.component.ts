import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products : any;
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getAll().subscribe(res => {
      this.products = res;
    },
    err => {
      console.log("Lỗi");
    });
  }
}
