import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayouPageComponent } from './pages/layou-page/layou-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';



@NgModule({
  declarations: [
    LayouPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
  ]
})
export class AuthModule { }
