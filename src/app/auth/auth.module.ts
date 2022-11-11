import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from '../uimodule/uimodule.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SocialLoginComponent } from './social-login/social-login.component';

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
@NgModule({
  declarations: [LoginComponent, RegisterComponent, SocialLoginComponent],
  imports: [UIModule, RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthModule {}
