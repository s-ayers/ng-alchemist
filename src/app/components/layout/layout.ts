import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlchemistViewComponent } from './alchemist-view/alchemist-view.component';
import { AlchemistAsideComponent } from './alchemist-aside/alchemist-aside.component';



@NgModule({
  declarations: [AlchemistViewComponent, AlchemistAsideComponent],
  imports: [
    CommonModule
  ],
  exports: [AlchemistViewComponent, AlchemistAsideComponent],
})
export class LayoutModule { }
