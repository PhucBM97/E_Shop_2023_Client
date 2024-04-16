import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { ProductDetailDTO } from 'src/app/Models/ProductDetailDTO.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {

  products: ProductDetailDTO[] = [];
  selectedValue : string = "";
  numbers: number[] = [];
  pageSize: number = 6;
  crrPage: number = 1;
  pageCount: number = 0;
  brandId: number = 0; 

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(){

    this.route.params.subscribe(params =>{
      let brandName = params['brandName'];
      console.log(brandName, 'brand nameeeeeeeeee');
      

      switch(brandName){
        case 'Adidas':
          this.brandId = 1
          break;
        case 'Nike':
          this.brandId = 2
          break;
        case 'New Balance':
          this.brandId = 3
          break;
        case 'Vans' :
          this.brandId = 4
          break;
        case 'Puma' :
          this.brandId = 5
          break;
        default:
          this.brandId = 1
          break;
      }
      console.log(params,'paramssssssssssssssssss');
      this.getAllData(this.brandId, this.crrPage, this.pageSize);
      
    })

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
      this.getAllData(this.brandId, this.crrPage, this.pageSize);
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

  getAllData(brandId: number, currentPage: number, pageSize: number){
    this.productService.getProductsByBrand(brandId, currentPage, pageSize)
    //.pipe(map(pros => pros.filter((pro: ProductDetailDTO) => pro.productBrand === 'Adidas')))
      .subscribe({
        next: (res) => { 
          this.products = res.products;
          this.crrPage = res.currentPage;
          this.pageCount = res.pageCount;
          this.numbers = Array(this.pageCount).fill(0).map((x,i)=>i);
          window.scrollTo(0,0)
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
