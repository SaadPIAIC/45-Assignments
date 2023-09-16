interface car{
    manufacturer: string;
    model: string;
    year?: number;
    color?: string;
}

let Car: car = {manufacturer : "Honda" , model : "RS" , year : 2023 , color : "Black"}

function make_Car(manufacturer : string , model : string , year?: number , color?: string){
    console.log(`Make : ${manufacturer}. Model : ${model}. Year : ${year}. Color : ${color}`);
}
make_Car(Car.manufacturer,Car.model,Car.year,Car.color);