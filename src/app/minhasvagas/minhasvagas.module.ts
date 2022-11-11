import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasvagasPageRoutingModule } from './minhasvagas-routing.module';

import { MinhasvagasPage } from './minhasvagas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasvagasPageRoutingModule
  ],
  declarations: [MinhasvagasPage]
})
export class MinhasvagasPageModule {}
