import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Reactive form modüllerini ekleyin
import { HttpClientModule } from '@angular/common/http'; // HttpClientModule import edin
import { ApiService } from 'src/core/services/api/api.service';  // Login servisinizi import edin
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
      ReactiveFormsModule, // Reactive form modülünü ekleyin
      HttpClientModule, // HttpClient modülünü ekleyin
      ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle
    ]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,  // Login servisinizi constructor'a ekleyin
    private router: Router  // Başarılı girişten sonra yönlendirme için
  ) {
    // Form yapısını oluşturun
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Form gönderildiğinde login işlemini başlatın
  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.apiService.login(username, password).subscribe({
        next: (response) => {
          // Başarılı login olduğunda token'ı kaydedin ve yönlendirme yapın
          localStorage.setItem('token', response.token);
          this.router.navigate(['dashboard']);  // Dashboard'a yönlendirin
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Giriş başarısız, lütfen tekrar deneyin.');
        },
      });
    }
  }
}
