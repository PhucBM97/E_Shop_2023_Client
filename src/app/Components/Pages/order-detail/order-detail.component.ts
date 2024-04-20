import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsDTO } from 'src/app/Models/OrderDetailsDTO.model';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
 

  orderDetails: OrderDetailsDTO[] = [];
  constructor(
    private route: ActivatedRoute,
    private order: OrderService
  ) {}

  ngOnInit(){

    this.route.params.subscribe(params =>{
      let orderId = params['orderId'];
      this.getDetail(orderId);
    });

  }

  getDetail(orderId: number){
    this.order.getDetail(orderId)
    .subscribe({
      next:(res) => {
        console.log(res,'detailssssss');
        
        this.orderDetails = res;
      },
      error: (err) => {

      }
    })
  }
}
