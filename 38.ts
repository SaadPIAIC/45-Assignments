describe_city();

let cityName:string="Berlin";
describe_city(cityName);

cityName="Paris";
describe_city(cityName);

cityName="Istanbul";
let countryName="Turkey";
describe_city(cityName,countryName);

function describe_city(city:string = "Karachi",country:string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}
