import { Time } from '@angular/common';

export class VehicleModel {

    public vehicleType : string;

    public level : number;

    public customerName : string;

    public licensePlateNumber : string;

    public vehicleModel : string;

    public startDate: Date;

    public startTime: Time;

    public hours : number;

    public isNewlyAdded: boolean;

    constructor(vehicleType: string, level: number, customerName: string, licensePlateNumber: string, 
        vehicleModel: string, startDate: Date, startTime: Time, hours: number, isNewlyAdded: boolean) {
        this.vehicleType = vehicleType;
        this.level = level;
        this.customerName = customerName;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleModel = vehicleModel;
        this.startDate = startDate;
        this.startTime = startTime;
        this.hours = hours;
        this.isNewlyAdded = isNewlyAdded;
    }
}