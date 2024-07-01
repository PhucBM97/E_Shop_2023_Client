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

  view: any[] = [700, 400];

  dete: any[] = [];
  dataTest: any[] = [];
  // Dữ liệu mẫu
  aaaaaa: { name: string; series: { name: string; value: number; }[]; }[] = [];
  bbbb: any[] = [];

  testObj  = {
    name : 'Doanh Thu',
    series: [] = [{
      name : '',
      value : 0
    }]
  }

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
      name: 'con cẹc',
      series: [
        { name: 'Jan', value: 50 },
        { name: 'Feb', value: 60 },
        { name: 'Mar', value: 45 },
        // thêm dữ liệu cho các tháng khác
      ]
    },
    // {
    //   name: 'Series 2',
    //   series: [
    //     { name: 'Jan', value: 70 },
    //     { name: 'Feb', value: 65 },
    //     { name: 'Mar', value: 80 },
    //     // thêm dữ liệu cho các tháng khác
    //   ]
    // }
  ];


  // Các cài đặt khác của line chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

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
  ) {  }

  ngOnInit(){
    ////
    const date = new Date();
    this.crrMonth = date.getMonth() + 1;

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

  getOrderByMonth(month: number){
    this.order.getOrderByMonth(month).subscribe({
      next: (res) => {
        this.ordersByMonth = res;
        console.log(this.ordersByMonth, 'testttttttttttttt data');

        res.map((data: any) => {
          console.log(data, 'ppppppppppppppppppppppppppppppppppppp');
          this.testObj.series.push(data)
        })
        this.testObj.series.shift();
        console.log(this.testObj, 'test obj');
        

        this.dete.push(this.testObj)

        this.dete  = [...this.dete]

        // this.dataTest = res.map((datum: { orderDate: any; total: any; }) => ({ name: datum.orderDate, value: datum.total }));
        // console.log(this.dataTest, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        // this.aaaaaa.push({
        //   name : 'Doanh Thu',
        //   series: [...this.dataTest]
        // })
        // this.bbbb = res.map((item: any) => ({
        //   name: 'Doanh Thu',
        //   series: [] = serie
        // }))

        // let i = 0;
        // let valueeee = 100
        // this.dete = this.multiSeriesData.map((group) => {
        //   console.log(group, 'group nèeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
        //   group.series = group.series.map(dataItem => {
        //     dataItem.name = 'con cẹcccccccccccccccccccccccc'
        //     dataItem.value = valueeee += 100
        //     return dataItem
        //   })
        //   return group
          
        // })


        console.log(this.bbbb,'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
        

        console.log(this.aaaaaa,'qweqweqweqweqweqweqweqweqweqwe');
        console.log(this.multiSeriesData,'qywteywteyqyqwy');
        
        
        //this.multiSeriesData.series = this.dataTest
      },
      error: (err) => {

      }
    })
  }
  goToDetail(orderId: number){
    this.router.navigate(['dashboard/orders/', orderId])
  }
}
