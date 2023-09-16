const favorite_fruits =['orange','mango','peach','plum'];


findFaveriteFruit(favorite_fruits,'Apple');
findFaveriteFruit(favorite_fruits,'Peach');
findFaveriteFruit(favorite_fruits,'Water Millan');
findFaveriteFruit(favorite_fruits,'mango');
findFaveriteFruit(favorite_fruits,'Orange');

function findFaveriteFruit(favFruits:string[],IsFavFruit:string)
{
   if (favFruits.includes(IsFavFruit.toLowerCase()))
   {
    console.log(`You really like ${IsFavFruit}!`);
   }
   else
   {
    console.log(`You don't like ${IsFavFruit}!`);
   }
}