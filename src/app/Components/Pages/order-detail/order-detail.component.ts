import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailsDTO } from 'src/app/Models/OrderDetailsDTO.model';
import { OrderService } from 'src/app/Services/order.service';
import { map } from 'rxjs';
import { OrderStatusCodeDTO } from 'src/app/Models/OrderStatusCode.model';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
 
  orderStatusCode! : OrderStatusCodeDTO;
  total:number = 0;
  orderId: number = 0;
  orderDetails: OrderDetailsDTO[] = [];
  constructor(
    private route: ActivatedRoute,
    private order: OrderService,
    private router: Router
  ) {}

  ngOnInit(){

    this.route.params.subscribe(params =>{
      this.orderId = params['orderId'];
      this.getDetail(this.orderId);

      
    });


  }

  getDetail(orderId: number){
    this.order.getDetail(orderId)
    .subscribe({
      next:(res) => {
        console.log(res,'detailssssss');
        this.orderDetails = res;
        this.orderDetails.map(value =>{
          this.total += value.subTotal
        })
      },
      error: (err) => {

      }
    })
  }

  updateStatusCode(orderId: number, code: number){
    this.orderStatusCode = new OrderStatusCodeDTO(orderId, code);
    this.order.updateStatus(this.orderStatusCode)
    .subscribe({
      next: (res) => {
        alert("thành công");
        this.router.navigate(['/dashboard/orders']);
      },
      error:(err) => {

      }
    })
  }
}
