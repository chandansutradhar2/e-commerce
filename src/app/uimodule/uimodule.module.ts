import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

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
    DropdownModule,
    TabViewModule,
    MessagesModule,
    MessageModule,
  ],
  exports: [
    CommonModule,
    InputTextModule,
    CardModule,
    MenubarModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    TabViewModule,
    DropdownModule,
    MessageModule,
    MessagesModule,
  ],
})
export class UIModule {}
