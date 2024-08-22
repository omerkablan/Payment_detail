/*import { Component,OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetailService } from '../shared/payment-detail.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailFormComponent,CommonModule,FormsModule,ToastrModule,BrowserAnimationsModule],
  templateUrl: './payment-details.component.html',
  styles: []
})
export class PaymentDetailsComponent implements OnInit{

  constructor(public service: PaymentDetailService){
  }
  
  ngOnInit(): void {
    this.service.refreshList();
  }

}
*/

import { Component, OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetailService } from '../shared/payment-detail.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [
    PaymentDetailFormComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './payment-details.component.html',
  styles: []
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService,private toastr:ToastrService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:PaymentDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    this.service.deletePaymentDetail(id)
    .subscribe({
      next:res=>{
        this.service.list = res as PaymentDetail[]
        this.toastr.error('Deleted successfully','Payment Detail Register')
      },
      error: err => { console.log(err) }
    })
  }
}
