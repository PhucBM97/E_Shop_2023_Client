import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { OrderDTO } from 'src/app/Models/OrderDTO.model';
import { CartService } from 'src/app/Services/cart.service';
import ValidateForm from './../../../Helpers/validateform';

@Component({
  selector: 'app-checkouts',
  templateUrl: './checkouts.component.html',
  styleUrls: ['./checkouts.component.scss']
})
export class CheckoutsComponent {

  orderForm!: FormGroup;
  getItem: any[] = [];
  productCart: any[] = [];
  totalPrice: number = 0;
  shippingFee: number = 40000.00;
  OrderObj!: OrderDTO;

  constructor(
    private fb: FormBuilder,
    private cookie: CookieService,
    private cart: CartService,
    private toast: NgToastService
  ) {}

  isDeliveryHome: Boolean = true;

  ngOnInit(){
    this.getProductFromCookie();
    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['', Validators.required],
      customerPhone: ['', Validators.required],
      customerAddress: ['', Validators.required],
      orderDelivery: ['', Validators.required],
      //orderTotal: ['', Validators.required]
    })
  }

  getProductFromCookie(){
    this.getItem = JSON.parse(this.cookie.get('product'));
    let total = 0;
    this.getItem.map(value => {
      if(value.productQuantity > 0)
        this.productCart.push(value);
      total += (value.productPrice * value.productQuantity);
    })
    this.totalPrice = total;
    console.log(total, 'totalllllllll');
    //this.orderForm.get('orderTotal')?.setValue(total);
  }

  isChecked(event: any){
    const value = event.target.value;
    if(value === 'home'){
      this.isDeliveryHome = true;
    } else {
      this.isDeliveryHome = false;
    }
    console.log(value,'qwehtqwujyetqwuyetqwuyet');
    
  }
  onSubmit(){
    if(this.orderForm.valid){
      console.log('aaaaaa');
      this.OrderObj = new OrderDTO();

      this.OrderObj = this.orderForm.value;
      this.OrderObj.orderTotal = this.totalPrice;
      this.OrderObj.orderDetail = JSON.parse(this.cookie.get('product'));

      this.OrderObj.orderDetail?.map(value => {
        value.productSubTotal = (value?.productPrice ?? 0) * (value?.productQuantity ?? 0);
      })

      console.log(this.OrderObj,'asdjhgasjdhgasjhdg');

      this.cart.createOrder(this.OrderObj)
      .subscribe({
        next:(res) => {
          this.toast.success({detail: "SUCCESS", summary: res.messsage, duration: 1000});
          this.cookie.deleteAll();
        },
        error:(err) => {
          this.toast.error({detail: "ERROR", duration: 1000});
        },
      })
      
      
    }
    else {
      console.log('bbbbbb');
      
    }
  }
}
