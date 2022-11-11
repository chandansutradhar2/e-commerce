import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    MenubarModule,
    ButtonModule,
    FormsModule,
    ToastModule,
TabViewModule
  ],
  exports: [
    CommonModule,
    InputTextModule,
    CardModule,
    MenubarModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    TabViewModule
  ],
})
export class UIModule {}
