import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, FormsModule,ReactiveFormsModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
