import { Component } from '@angular/core';
import { filter,map } from 'rxjs';
import { Product } from 'src/app/Models/Product.model';
import { ProductDetailDTO } from 'src/app/Models/ProductDetail.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.scss']
})
export class AdidasComponent {

  products: ProductDetailDTO[] = [];
  selectedValue : string = "";

  constructor(
    private productService: ProductService,
  ) {}
  
  ngOnInit(){
    this.getAll();

    this.productService.getFilter()
    .subscribe({
      next: (res) => {
        if(res === '1' || res === '2')
        this.getAll(res);
      }
    })
  }

  onChange(event: any){
    this.selectedValue = event.target.value;
    console.log(this.selectedValue);
    this.productService.setFilter(this.selectedValue);    
  }

  getAll(type?: string){
    if((type?.length === 0) || type === undefined){
      this.getAllData();
    } else {
      switch(type){
        case '1' :
          this.getDataAsc();
          break;
        case '2':
          this.getDataDesc();
          break;
        default:
          this.getAll();
          break;
      }
    }
  }

  getAllData(){
    this.productService.getAll()
    .pipe(map(pros => pros.filter((pro: ProductDetailDTO) => pro.productBrand === 'Adidas')))
      .subscribe({
        next: (res) => { 
          this.products = res;
          console.log(res,'bt');
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
  getDataAsc(){
    this.products = this.products.sort((a: any,b: any) => a.productPrice - b.productPrice)
  }

  getDataDesc(){
    this.products = this.products.sort((a: any,b: any) => b.productPrice - a.productPrice)

  }
}
