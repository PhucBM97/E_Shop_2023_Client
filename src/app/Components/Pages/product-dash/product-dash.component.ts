import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import { ProductDetailDTO } from 'src/app/Models/ProductDetailDTO.model';
import { ProductListDTO } from 'src/app/Models/ProductListDTO.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss']
})
export class ProductDashComponent {


  products: ProductDetailDTO[] = [];
  numbers: number[] = [];
  pageSize: number = 5;
  crrPage: number = 1;
  pageCount: number = 0;
  
  constructor(
    private product: ProductService
  ) {}


  ngOnInit(){
    this.getProducts(this.crrPage, this.pageSize);
  }

  getProducts(currentPage: number, PageSize: number){
    this.product.getAll(currentPage, PageSize)
    .subscribe({
      next: (res) =>{
        this.products = res.products;
        this.crrPage = res.currentPage;
        this.pageCount = res.pageCount;
        this.numbers = Array(this.pageCount).fill(0).map((x,i)=>i);
      },
      error: (err) => {

      }
    })
  }
}
