import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDeleteVehicleComponent } from './add-delete-vehicle/add-delete-vehicle.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { HeaderComponent } from './header/header.component';
import { VehicleService } from './data-share-services/vehicle.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { searchPipe } from './view-vehicle/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AddDeleteVehicleComponent,
    ViewVehicleComponent,
    HeaderComponent,
    searchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
