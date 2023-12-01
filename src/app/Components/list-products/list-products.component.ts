import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: 
  './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  @Input() data: Product[] = [];
  
}
