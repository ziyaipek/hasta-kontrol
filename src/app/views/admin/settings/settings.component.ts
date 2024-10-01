import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  updateContactInfo() {
    console.log('İletişim bilgisi değiştiriliyor...');
    // İletişim bilgilerini güncelleme işlemleri burada yapılabilir
  }

  changePassword() {
    console.log('Şifre değiştiriliyor...');
    // Şifre değiştirme işlemleri burada yapılabilir
  }

  deleteAccount() {
    console.log('Hesap siliniyor...');
    // Hesap silme işlemleri burada yapılabilir
  }
}
