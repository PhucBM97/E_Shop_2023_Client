import { Component } from '@angular/core';
import { Brand } from 'src/app/Models/Brand.model';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  brands : Brand[] = [];
  constructor(
    private brand: BrandService
  ) {}

  ngOnInit(){
    this.getBrand();
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
}
