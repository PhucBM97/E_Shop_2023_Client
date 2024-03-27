import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product.model';
import { ProductService } from 'src/app/Services/product.service';
import { Image } from './../../../Models/Image.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  productId : number = 0;
  productDetail!: Product;
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private productService : ProductService
  ) {}

  ngOnInit(){
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    this.getProductById(this.productId);
  }

  getProductById(id: number){
    this.productService.getProduct(id)
    .subscribe({
      next: (res) => {
        console.log(res, 'detailll');
        console.log(res.images[0]);
        
        
        this.productDetail = res;
      },
      error: (err) => {

      }
    })
  }

}
