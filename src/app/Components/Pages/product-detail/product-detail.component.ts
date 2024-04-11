import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product.model';
import { ProductService } from 'src/app/Services/product.service';
import { Image } from './../../../Models/Image.model';
import { Observable, map, filter } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  productId : number = 0;
  productDetail!: Product;
  productColor!: Product[];
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private productService : ProductService
  ) {}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.productId = params['id'];
      console.log(params,'paramssssssssssssssssss');
      this.getProductById(params['id']);
      //this.getColor(params['id'], name);
      
    })
    console.log(this.productId,'-------------------');
  

    this.getProductById(this.productId);

    //this.getColor(this.productId, name);
  }

  getProductById(id: number): any{
    this.productService.getProduct(id)
    .subscribe({
      next: (res) => {
        console.log(res, 'detailll');
        console.log(res.images[0]);
        this.productDetail = res;
        this.getColor(id, res.productName);
      },
      error: (err) => {

      }
    })
  }

  getColor(id: number, proName: string){
    this.productService.getAll()
    .pipe(map(pros => pros.filter((pro: Product) => pro.productName?.includes(proName) && pro.productID.toString() !== id.toString())))
    .subscribe({
      next: (res) => {
        console.log(res,'resssssssssssssssssssssssssss');
        this.productColor = res;

        console.log(this.productColor,'filterrrrrrrrrrrr');
        
      },
      error:(err) => {

      }
    })
  }

  thaydoi(event: any){
    console.log(event.target.value,' eventttttttt');
    
  }

}
