import { Injectable } from '@angular/core';
import { VehicleModel } from '../vehicle-model/vehicle.model';
import { Subject } from 'rxjs';

@Injectable()
export class VehicleService {

    vehicles: VehicleModel[] = [
        new VehicleModel("Car", 1, "Test 1", "M-DT-1111", "BMW 1 series", new Date(), {hours: 10, minutes: 30}, 8, false ),
        new VehicleModel("Motorbike", 2, "Test 2", "M-OB-2222", "BMW 2 series", new Date(), {hours: 11, minutes: 30}, 8, false ),
        new VehicleModel("Car", 1, "Test 3", "M-SC-3333", "BMW 3 series", new Date(), {hours: 12, minutes: 30}, 8, false ),
        new VehicleModel("Motorbike", 2, "Test 4", "M-OL-4444", "BMW 4 series", new Date(), {hours: 13, minutes: 30}, 8, false ),
        new VehicleModel("Car", 1, "Test 5", "M-MA-5555", "BMW 5 series", new Date(), {hours: 14, minutes: 30}, 8, false ),
        new VehicleModel("Motorbike", 2, "Test 6", "M-UN-6666", "BMW 6 series", new Date(), {hours: 15, minutes: 30}, 8, false ),
        new VehicleModel("Car", 1, "Test 7", "M-DO-2245", "BMW 7 series", new Date(), {hours: 16, minutes: 30}, 8, false ),
        new VehicleModel("Motorbike", 2, "Test 8", "M-DT-8888", "BMW 8 series", new Date(), {hours: 17, minutes: 30}, 8, false ),
        new VehicleModel("Car", 1, "Test 9", "M-DT-1121", "BMW 9 series", new Date(), {hours: 18, minutes: 30}, 8, false ),
        new VehicleModel("Motorbike", 2, "Test 10", "M-DT-4444", "BMW 10 series", new Date(), {hours: 19, minutes: 30}, 8, false ),
        
        new VehicleModel("Car", 1, "Test 11", "M-DT-9999", "BMW 1 series", new Date(), {hours: 10, minutes: 30}, 8, false ),
        new VehicleModel("Motorbike", 2, "Test 12", "M-OB-1234", "BMW 2 series", new Date(), {hours: 11, minutes: 30}, 8, false ),
        new VehicleModel("Car", 1, "Test 13", "M-SC-1478", "BMW 3 series", new Date(), {hours: 12, minutes: 30}, 8, false ),
        new VehicleModel("Motorbike", 2, "Test 14", "M-OL-7845", "BMW 4 series", new Date(), {hours: 13, minutes: 30}, 8, false ),
        new VehicleModel("Car", 1, "Test 15", "M-MA-1598", "BMW 5 series", new Date(), {hours: 14, minutes: 30}, 8, false ),
        new VehicleModel("Motorbike", 2, "Test 16", "M-UN-9662", "BMW 6 series", new Date(), {hours: 15, minutes: 30}, 8, false ),
        new VehicleModel("Car", 1, "Test 17", "M-DO-3654", "BMW 7 series", new Date(), {hours: 16, minutes: 30}, 8, false ),
        new VehicleModel("Motorbike", 2, "Test 18", "M-DT-4521", "BMW 8 series", new Date(), {hours: 17, minutes: 30}, 8, false ),
        new VehicleModel("Car", 1, "Test 19", "M-DT-2587", "BMW 9 series", new Date(), {hours: 18, minutes: 30}, 8, false ),
        new VehicleModel("Motorbike", 2, "Test 20", "M-DT-9632", "BMW 10 series", new Date(), {hours: 19, minutes: 30}, 8, false )
    ];

    vehicleListChanged = new Subject<VehicleModel[]>();

    getVehicles() {
        return this.vehicles.slice();
    }

    saveVehicle(newVehicleModel: VehicleModel) {
        this.vehicles.unshift(newVehicleModel);
        this.vehicleListChanged.next(this.vehicles);
    }

    deleteVehicle(index: number) {
        this.vehicles.splice(index, 1);
        this.vehicleListChanged.next(this.vehicles.slice());
    }

}