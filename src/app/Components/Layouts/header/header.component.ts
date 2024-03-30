import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Brand } from 'src/app/Models/Brand.model';
import { BrandService } from 'src/app/Services/brand.service';
import { map } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  countCart: number = 0 ;
  brands : Brand[] = [];
  constructor(
    private brand: BrandService,
    private cookie: CookieService,
    private cart: CartService
  ) {}

  ngOnInit(){
    this.getBrand();


    // phải để subcriber ở trên hàm getall
    this.cart.getNumberOfItems()
    .subscribe(res => {
      this.countCart = res;
    })

    
    this.getCount();
  }

  getBrand(){
    this.brand.getBrand()
    .subscribe({
      next:(res) => {
        this.brands = res;
        console.log(res, 'brand header');
        
      },
      error: (err) => {

      }
    })
  }

  getCount(){
    let data = JSON.parse(this.cookie.get('product'));

    let count : number = 0;
    data.map(() => {
        count++;
    })
    this.countCart = count;
    console.log(this.countCart, ' counttttttttttttttt');
  }
}
