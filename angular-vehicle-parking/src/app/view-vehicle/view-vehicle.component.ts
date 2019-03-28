import { Component, OnInit, OnDestroy } from '@angular/core';
import { VehicleService } from '../data-share-services/vehicle.service';
import { VehicleModel } from '../vehicle-model/vehicle.model';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css', '../app.component.css']
})
export class ViewVehicleComponent implements OnInit, OnDestroy {

  headerElements = ['SL.No', 'Registration Number', 'Vehicle Type', 'level', 'Action'];

  vehicleList: VehicleModel[];

  subscription: Subscription;

  page: number = 1;

  selectedVehicle: number;
  
  constructor(private vehicleService: VehicleService, private modalService: NgbModal) { }

  ngOnInit() {
    this.vehicleList = this.vehicleService.getVehicles();

    this.subscription = this.vehicleService.vehicleListChanged.subscribe(
      (vehicleModelObj : VehicleModel[]) => {
        this.vehicleList = vehicleModelObj;
      },
      (error) => console.error(error)
    );
  }

  highlightRow(vehicle: VehicleModel) {
    if (vehicle.isNewlyAdded) {
      return 'highlight';
    }
  }

  onExitClick(deleteWindowContent: any, index: number) {
    this.selectedVehicle = index;
    this.modalService.open(deleteWindowContent);
  }

  deleteVehicle() {
    this.vehicleService.deleteVehicle(this.selectedVehicle);
    this.modalService.dismissAll();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
