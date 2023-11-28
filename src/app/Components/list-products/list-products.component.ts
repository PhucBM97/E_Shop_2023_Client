import { Component, Input } from '@angular/core';
import { Sanpham } from 'src/app/Models/SanPham';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  @Input() listProducts: Sanpham[] = [];
}
