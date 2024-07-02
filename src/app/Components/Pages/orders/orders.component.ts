import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  data: any[] = [];

  month: number[] = [1,2,3,4,5,6,7,8,9,10,11,12]

  // testObj  = {
  //   name : 'Doanh Thu',
  //   series: [] = [{
  //     name : '',
  //     value : 0
  //   }]
  // }

  public single = [
    {
      "name": "China",
      "value": 2243772
    },
    {
      "name": "USA",
      "value": 1126000
    },
    {
      "name": "Norway",
      "value": 296215
    },
    {
      "name": "Japan",
      "value": 257363
    },
    {
      "name": "Germany",
      "value": 196750
    },
    {
      "name": "France",
      "value": 204617
    }
  ];
  multiSeriesData = [

    {
      name: 'Doanh Thu',
      series: [
        { name: '2024-06-27 20:17:40.143', value: 5000000 },
        { name: 'NGày 2', value: 10000000 },
        { name: 'NGày 3', value: 45 },
        // thêm dữ liệu cho các tháng khác
      ]
    },
    {
      name: 'TEst',
      series: [
        { name: 'Jan', value: 50 },
        { name: 'Feb', value: 60 },
        { name: 'Mar', value: 45 },
        // thêm dữ liệu cho các tháng khác
      ]
    },
  ];


  // Các cài đặt khác của line chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'VND';

  onSelect(event: any) {
    console.log(event);
  }
  

  ////////
  orders: any[] = [];
  ordersByMonth: any[] = [];
  crrMonth: number = 0;
  constructor(
    private order: OrderService,
    private router: Router
  ) { 
        ////
        const date = new Date();
        this.crrMonth = date.getMonth() + 1;
   }

  ngOnInit(){


    console.log(this.crrMonth, 'monthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
    
    this.getOrder();
    this.getOrderByMonth(this.crrMonth);
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

  getOrderByMonth(event : any | number){
    this.data = [];
    let month = 0;
    if(typeof event !== 'number')
      month = event.target.value;
    else
      month = event;
    this.crrMonth = month;
    
    this.order.getOrderByMonth(month).subscribe({
      next: (res) => {
        //this.ordersByMonth = res;
        this.data.push({
          name : 'Doanh Thu',
          series : [] = res
        })

        this.data = [...this.data];


        // res.map((data: any) => {
        //   console.log(data, 'ppppppppppppppppppppppppppppppppppppp');
        //   this.testObj.series.push(data)
        // })
        // this.testObj.series.shift();
        // console.log(this.testObj, 'test obj');
        // this.dete.push(this.testObj)
        // this.dete  = [...this.dete]




        // Mẫu ví dụ dùng MAP
        // let i = 0;
        // let valueeee = 100
        // this.dete = this.multiSeriesData.map((group) => {
        //   console.log(group, 'group nèeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
        //   group.series = group.series.map(dataItem => {
        //     dataItem.name = 
        //     dataItem.value = valueeee += 100
        //     return dataItem
        //   })
        //   return group
          
        // })

      },
      error: (err) => {

      }
    })
  }
  goToDetail(orderId: number){
    this.router.navigate(['dashboard/orders/', orderId])
  }
}
