"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Encapsulation_1 = require("./Encapsulation");
var InfoSummaryImpl = /** @class */ (function () {
    function InfoSummaryImpl() {
        this.vehicles = [];
    }
    InfoSummaryImpl.prototype.getTotalVehicle = function (type) {
        if (type) {
            var filteredVehicles = this.vehicles.filter(function (vehicle) { return vehicle.VehicleType === type; });
            return filteredVehicles.length;
        }
        else {
            return this.vehicles.length;
        }
    };
    InfoSummaryImpl.prototype.getTotalIncomeVehicle = function (type) {
        if (type) {
            var filteredVehicles = this.vehicles.filter(function (vehicle) { return vehicle.VehicleType === type; });
            return filteredVehicles.reduce(function (totalIncome, vehicle) { return totalIncome + vehicle.Total; }, 0);
        }
        else {
            return this.vehicles.reduce(function (totalIncome, vehicle) { return totalIncome + vehicle.Total; }, 0);
        }
    };
    InfoSummaryImpl.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    return InfoSummaryImpl;
}());
var infoSummary = new InfoSummaryImpl();
var vehicle1 = new Encapsulation_1.Income('D 1001 UM', 'SUV', '2010', 350000000, 3500000, 4, new Date(2023, 10, 1), 500000, 150000, 0, 0);
var vehicle2 = new Encapsulation_1.Income('D 1002 UM', 'SUV', '2010', 350000000, 3500000, 4, new Date(2023, 10, 0), 500000, 150000, 0, 0);
var vehicle3 = new Encapsulation_1.Income('D 1003 UM', 'SUV', '2015', 350000000, 3500000, 5, new Date(2023, 12, 0), 500000, 150000, 0, 0);
var vehicle4 = new Encapsulation_1.Income('D 1004 UM', 'SUV', '2015', 350000000, 3500000, 5, new Date(2023, 13, 0), 500000, 150000, 0, 0);
var vehicle5 = new Encapsulation_1.Income('D 11 UK', 'Taxi', '2002', 175000000, 1750000, 4, new Date(2023, 12, 0), 0, 0, 45, 4500);
var vehicle6 = new Encapsulation_1.Income('D 12 UK', 'Taxi', '2015', 225000000, 2250000, 4, new Date(2023, 13, 0), 0, 0, 75, 4500);
var vehicle7 = new Encapsulation_1.Income('D 13 UK', 'Taxi', '2020', 275000000, 2750000, 4, new Date(2023, 13, 0), 0, 0, 90, 4500);
var vehicle8 = new Encapsulation_1.Income('ID8089', 'PrivateJet', '2015', 150000000000, 1500000000, 12, new Date(2022, 23, 11), 35000000, 15000000, 0, 0);
var vehicle9 = new Encapsulation_1.Income('ID8099', 'PrivateJet', '2018', 175000000000, 1750000000, 15, new Date(2022, 23, 11), 55000000, 25000000, 0, 0);
infoSummary.addVehicle(vehicle1);
infoSummary.addVehicle(vehicle2);
infoSummary.addVehicle(vehicle3);
infoSummary.addVehicle(vehicle4);
infoSummary.addVehicle(vehicle5);
infoSummary.addVehicle(vehicle6);
infoSummary.addVehicle(vehicle7);
infoSummary.addVehicle(vehicle8);
infoSummary.addVehicle(vehicle9);
console.log(infoSummary.getTotalVehicle());
console.log(infoSummary.getTotalVehicle("SUV"));
console.log(infoSummary.getTotalIncomeVehicle("SUV"));
console.log(infoSummary.getTotalIncomeVehicle("Taxi"));
console.log(infoSummary.getTotalIncomeVehicle("PrivateJet"));
console.log(infoSummary.getTotalIncomeVehicle());
