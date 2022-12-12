import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { SharedModule } from '@shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, SharedModule, DemoRoutingModule],
})
export class DemoModule {}
