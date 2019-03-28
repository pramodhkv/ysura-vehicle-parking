import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleModel } from '../vehicle-model/vehicle.model';
import { VehicleService } from '../data-share-services/vehicle.service';

@Component({
  selector: 'app-add-delete-vehicle',
  templateUrl: './add-delete-vehicle.component.html',
  styleUrls: ['./add-delete-vehicle.component.css', '../app.component.css']
})
export class AddDeleteVehicleComponent implements OnInit {

  slots: any[] = [
    {id: 0, isBooked: false},
    {id: 1, isBooked: false},
    {id: 2, isBooked: false},
    {id: 3, isBooked: false},
    {id: 4, isBooked: false},
    {id: 5, isBooked: false},
    {id: 6, isBooked: false},
    {id: 7, isBooked: false},
    {id: 8, isBooked: false},
    {id: 9, isBooked: false}
  ];

  isBookingFormDisplayed : boolean = false;

  selectedSlotNumber : number;

  vehicleModelObj: VehicleModel;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  onSlotSelect(index: number) {
    this.isBookingFormDisplayed = true;
    this.selectedSlotNumber = index;
    
    let vehicleList = this.vehicleService.getVehicles().map(
      (vehicle) => {
        if (vehicle.isNewlyAdded) {
          vehicle.isNewlyAdded = !vehicle.isNewlyAdded;
        }
        return vehicle;
      }
    );
    this.vehicleService.vehicleListChanged.next(vehicleList);
  }

  onAddSlot(addSlotForm: NgForm) {
    let formValue = addSlotForm.value;
    this.vehicleModelObj = new VehicleModel(formValue.vehicleTypeDropDown, formValue.levelDropDown, formValue.customerName, 
      formValue.licensePlateNumber, formValue.vehicleModel, formValue.startDate, formValue.startTime, formValue.hours, true);

    this.vehicleService.saveVehicle(this.vehicleModelObj);

    this.isBookingFormDisplayed = false;

    this.slots[this.selectedSlotNumber].isBooked = true;

  }

  onCancelSlot(addSlotForm: NgForm) {
    addSlotForm.reset();
    this.isBookingFormDisplayed = false;
  }

  getColors(slot) {
     if (slot.isBooked) {
      return "btn-danger";
    }
    return "btn-primary";
  }

}
