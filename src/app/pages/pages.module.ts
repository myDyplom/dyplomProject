import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesImports } from './pages.imports';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../shared/_modal/modal.component';
import { DeviceKeyFilterPipe } from '../utils/pipes/device-key-filter';
import { HomeComponent } from './home/home.component';
import { NewCarComponent } from './new-car/new-car.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
const productRoutes: Routes = [];

@NgModule({
  imports: [
    ...PagesImports,
    FormsModule,
    RouterModule.forChild(productRoutes),
    CommonModule,
  ],
  exports: [
    PagesComponent
  ],
  declarations: [
    PagesComponent,
    ModalComponent,
    DeviceKeyFilterPipe,
    HomeComponent,
    NewCarComponent,
    DetailsComponent,
    ContactComponent,
  ]
})
export class PagesModule {
}
