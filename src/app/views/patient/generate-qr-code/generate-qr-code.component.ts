import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-generate-qr-code',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './generate-qr-code.component.html',
  styleUrls: ['./generate-qr-code.component.scss']
})
export class GenerateQRCodeComponent {
  qrData: string = 'http://localhost:4200/patient/my-health-info'; // Yönlendirmek istediğiniz URL
}
