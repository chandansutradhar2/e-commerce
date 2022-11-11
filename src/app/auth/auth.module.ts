import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from '../uimodule/uimodule.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { MainComponent } from './main/main.component';

const authRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    // children: [
    //   {
    //     path: 'login',
    //     component: LoginComponent,
    //   },
    //   {
    //     path: 'register',
    //     component: RegisterComponent,
    //   },
    // ],
  },
];
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SocialLoginComponent,
    MainComponent,
  ],
  imports: [UIModule, RouterModule.forChild(authRoutes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class AuthModule {}
