import { Component } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orders: any[] = [];
  constructor(
    private order: OrderService
  ) {}

  ngOnInit(){
    this.getOrder();
  }
  getOrder(){
    this.order.getOrders()
    .subscribe({
      next: (res) => {
        console.log(res, 'ordersssssssssssssssss');
        
        this.orders = res;
      },
      error:(err) => {

      }
    })
  }
}
