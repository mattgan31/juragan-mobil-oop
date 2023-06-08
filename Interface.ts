import { Income } from "./Encapsulation";

interface InfoSummary {
    getTotalVehicle(): number;
    getTotalVehicle(type: string): number;
    getTotalIncomeVehicle(type: string): number;
    getTotalIncomeVehicle(): number;
}

class InfoSummaryImpl implements InfoSummary{
    private vehicles: Income[];

    constructor() {
        this.vehicles = []
    }
    getTotalVehicle(): number;
    getTotalVehicle(type: string): number;
    getTotalVehicle(type?: unknown): number {
        if (type) {
            const filteredVehicles = this.vehicles.filter(
              (vehicle) => vehicle.VehicleType === type
            );
            return filteredVehicles.length;
          } else {
            return this.vehicles.length;
          }
    }
    getTotalIncomeVehicle(type: string): number;
    getTotalIncomeVehicle(): number;
    getTotalIncomeVehicle(type?: unknown): number {
        if (type) {
            const filteredVehicles = this.vehicles.filter(
              (vehicle) => vehicle.VehicleType === type
            );
            return filteredVehicles.reduce(
              (totalIncome, vehicle) => totalIncome + vehicle.Total,
              0
            );
          } else {
            return this.vehicles.reduce(
              (totalIncome, vehicle) => totalIncome + vehicle.Total,
              0
            );
          }
    }
    addVehicle(vehicle: Income) {
        this.vehicles.push(vehicle);
    }
}

const infoSummary = new InfoSummaryImpl();

const vehicle1 = new Income('D 1001 UM', 'SUV', '2010', 350000000, 3500000, 4, new Date(2023,10,1), 500000, 150000, 0, 0);
const vehicle2 = new Income('D 1002 UM', 'SUV', '2010', 350000000, 3500000, 4, new Date(2023,10,0), 500000, 150000, 0, 0);
const vehicle3 = new Income('D 1003 UM', 'SUV', '2015', 350000000, 3500000, 5, new Date(2023,12,0), 500000, 150000, 0, 0);
const vehicle4 = new Income('D 1004 UM', 'SUV', '2015', 350000000, 3500000, 5, new Date(2023,13,0), 500000, 150000, 0, 0);
const vehicle5 = new Income('D 11 UK', 'Taxi', '2002', 175000000, 1750000, 4, new Date(2023,12,0), 0, 0, 45, 4500);
const vehicle6 = new Income('D 12 UK', 'Taxi', '2015', 225000000, 2250000, 4, new Date(2023,13,0), 0, 0, 75, 4500);
const vehicle7 = new Income('D 13 UK', 'Taxi', '2020', 275000000, 2750000, 4, new Date(2023,13,0), 0, 0, 90, 4500);
const vehicle8 = new Income('ID8089', 'PrivateJet', '2015', 150000000000, 1500000000, 12, new Date(2022,23,11), 35000000, 15000000, 0, 0);
const vehicle9 = new Income('ID8099', 'PrivateJet', '2018', 175000000000, 1750000000, 15, new Date(2022,23,11), 55000000, 25000000, 0, 0);
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
