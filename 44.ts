let items = ["Tomato","Kabab","Podina","Lemon"];

sandwiches(items);

function sandwiches(items: string[]){
    console.log(`Your Sandwich Is Being Delivered. With Items : ${items.join(" , ")}`);
}