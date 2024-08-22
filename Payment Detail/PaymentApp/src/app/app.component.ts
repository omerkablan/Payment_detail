import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaymentDetailsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'PaymentApp';
}
