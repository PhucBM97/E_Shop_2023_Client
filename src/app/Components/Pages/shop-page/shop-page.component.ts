import { Component } from '@angular/core';
import { map, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/Models/Product.model';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent {

  products: Product[] = [];
  selectedValue : string = "";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute, private router: Router
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
      .subscribe({
        next: (res) => {
          this.products = res;
          console.log(res,'bt');
          this.productService.setcommonData(res);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
  getDataAsc(){
    this.products = this.products.sort((a: any,b: any) => a.price - b.price)
  }

  getDataDesc(){
    this.products = this.products.sort((a: any,b: any) => b.price - a.price)

  }

  showAdidas(){
    this.router.navigate(['login'], {relativeTo:this.route});
  }
}
