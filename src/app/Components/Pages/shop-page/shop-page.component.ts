import { Component } from '@angular/core';
import { map, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/Models/Product.model';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailDTO } from 'src/app/Models/ProductDetailDTO.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent {

  products: ProductDetailDTO[] = [];
  selectedValue : string = "";
  isLoaded: boolean = false;
  numbers: number[] = [];
  pageSize: number = 9;
  crrPage: number = 1;
  pageCount: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute, 
    private router: Router,
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
      this.getAllData(this.crrPage, this.pageSize);
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

  getAllData(currentPage: number, PageSize: number){
    this.productService.getAll(currentPage,PageSize)
      .subscribe({
        next: (res) => {
          this.products = res.products;
          this.crrPage = res.currentPage;
          this.pageCount = res.pageCount;
          this.numbers = Array(this.pageCount).fill(0).map((x,i)=>i);
          window.scrollTo(0,0)

          console.log(res,'bt');
          this.productService.setcommonData(res);
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

  showAdidas(){
    this.router.navigate(['login'], {relativeTo:this.route});
  }
}
