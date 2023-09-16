// let name1 = 'saad';

// console.log(name1=='saad');
// console.log(name1!='saad');

// console.log(name1==name1.toLocaleLowerCase());
// console.log(name1!=name1.toLocaleLowerCase());

// let num = 10;

// console.log(num==10 , `\n` , num > 7 , `\n` , num >= 7 , `\n` , `\n`);
// console.log(num!=10 , `\n` , num < 7 , `\n` , num <= 7);

// let num = 10;

// console.log(num >= 10 && num != 7);
// console.log(num != 10 || num < 10);

const Fruits:string[] = ['apple','banana','mango'];

let  fruit = 'banana';
let fruitAvailable:boolean =IsFruitAvailable(Fruits,fruit)
if (fruitAvailable){
    console.log(`Fruit '${fruit}' Available `);
}
else
{
    console.log(`Fruit '${fruit}'  not Available `);
}

function IsFruitAvailable(fruits:string[],Searchfruit:string):boolean
{
    let fruitFound =false;
    for (const fruit of Fruits){
        console.log(fruit);
        if (fruit==Searchfruit)
        {
            console.log(`Fruit ${fruit} Found `);
            fruitFound=true;
            return fruitFound;
        }

    }
    console.log(fruitFound);
    return fruitFound;
    
}
