import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orders: any[] = [];
  constructor(
    private order: OrderService,
    private router: Router
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

  goToDetail(orderId: number){
    this.router.navigate(['dashboard/orders/', orderId])
  }
}
