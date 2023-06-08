export class Vehicle{
    private noPolice: string;
    private vehicleType: string;
    private year: string;
    private price: number;
    private tax: number;
    private seat: number;

    constructor(noPolice: string, vehicleType: string, year: string, price: number, tax: number, seat: number) {
        this.noPolice = noPolice;
        this.vehicleType = vehicleType;
        this.year = year;
        this.price = price;
        this.tax = tax;
        this.seat = seat;
    }
    public get NoPolice(): string{
        return this.noPolice;
    }
    public get VehicleType(): string{
        return this.vehicleType;
    }
    public get Year(): string{
        return this.year;
    }
    public get Price(): number{
        return this.price;
    }
    public get Tax(): number{
        return this.tax;
    }
    public get Seat(): number{
        return this.seat;
    }
}

export class Income extends Vehicle{
    private transactionDate: Date;
    private rent: number;
    private driver: number;
    private order: number;
    private orderPerKM: number;
    private total: number;

    constructor(noPolice: string, vehicleType: string, year: string, price: number, tax: number, seat: number, transactionDate: Date, rent: number, driver: number, order: number, orderPerKM: number) {
        super(noPolice, vehicleType, year, price, tax, seat);
        this.transactionDate = transactionDate;
        this.rent = rent;
        this.driver = driver;
        this.order = order;
        this.orderPerKM = orderPerKM;
    }

    public get TransactionDate(): Date{
        return this.transactionDate;
    }

    public get Rent(): number{
        return this.rent;
    }

    public get Driver(): number{
        return this.driver;
    }

    public get Order(): number{
        return this.order;
    }

    public get OrderPerKM(): number{
        return this.orderPerKM;
    }

    public get Total(): number{
        if (this.rent == 0) {
            this.total = this.order * this.orderPerKM;
        } else {
            this.total = this.rent + this.driver;
        }
        return this.total;
    }
}

