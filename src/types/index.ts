export interface Car  
    {
    _id: "6794cb6d4e731994de1b2cb9";
    make: string;
    model: string;
    year: number;
    price: number;
    color: string;
    mileage: number;
    fuelType: "Gas" |"Diesel" |"Electric"|"Hybrid";
    transmission: "Automatic"| "Manual";
    drive: "fwd"| "rwd" |"awd"|"4wd";
    type: string;
    description: string;
    capacity: number;
    gasoline: number;
}


export interface  Order {
    _id: string;
    product: Car;
    quantity: number;
    money_spend: number;
    currency: string;
    type:string;
    createdAt: string;
    updatedAt: string;
    __v: 0;

}