import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlchemistAppComponent } from './alchemist-app/alchemist-app.component';
import { AlchemistBusyComponent } from './alchemist-busy/alchemist-busy.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AlchemistAppComponent, AlchemistBusyComponent],
  exports: [AlchemistAppComponent, AlchemistBusyComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AlchemistCoreModule { }
