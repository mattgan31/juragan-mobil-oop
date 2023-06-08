"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Income = exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(noPolice, vehicleType, year, price, tax, seat) {
        this.noPolice = noPolice;
        this.vehicleType = vehicleType;
        this.year = year;
        this.price = price;
        this.tax = tax;
        this.seat = seat;
    }
    Object.defineProperty(Vehicle.prototype, "NoPolice", {
        get: function () {
            return this.noPolice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "VehicleType", {
        get: function () {
            return this.vehicleType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Year", {
        get: function () {
            return this.year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Price", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Tax", {
        get: function () {
            return this.tax;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Seat", {
        get: function () {
            return this.seat;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var Income = /** @class */ (function (_super) {
    __extends(Income, _super);
    function Income(noPolice, vehicleType, year, price, tax, seat, transactionDate, rent, driver, order, orderPerKM) {
        var _this = _super.call(this, noPolice, vehicleType, year, price, tax, seat) || this;
        _this.transactionDate = transactionDate;
        _this.rent = rent;
        _this.driver = driver;
        _this.order = order;
        _this.orderPerKM = orderPerKM;
        return _this;
    }
    Object.defineProperty(Income.prototype, "TransactionDate", {
        get: function () {
            return this.transactionDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Income.prototype, "Rent", {
        get: function () {
            return this.rent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Income.prototype, "Driver", {
        get: function () {
            return this.driver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Income.prototype, "Order", {
        get: function () {
            return this.order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Income.prototype, "OrderPerKM", {
        get: function () {
            return this.orderPerKM;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Income.prototype, "Total", {
        get: function () {
            if (this.rent == 0) {
                this.total = this.order * this.orderPerKM;
            }
            else {
                this.total = this.rent + this.driver;
            }
            return this.total;
        },
        enumerable: false,
        configurable: true
    });
    return Income;
}(Vehicle));
exports.Income = Income;
