import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-checkouts',
  templateUrl: './checkouts.component.html',
  styleUrls: ['./checkouts.component.scss']
})
export class CheckoutsComponent {

  orderForm!: FormGroup;
  productCart: any[] = [];
  totalPrice: number = 0;
  shippingFee: number = 40000.00;

  constructor(
    private fb: FormBuilder,
    private cookie: CookieService
  ) {}

  isDeliveryHome: Boolean = true;

  ngOnInit(){
    this.getProductFromCookie();
    this.orderForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    })
  }

  getProductFromCookie(){
    this.productCart = JSON.parse(this.cookie.get('product'));
    let total = 0;
    this.productCart.map(value => {
      total += (value.productPrice * value.productQuantity);
    })
    this.totalPrice = total;
    console.log(total, 'totalllllllll');
    
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
      
    }
    else {
      console.log('bbbbbb');
      
    }
  }
}
