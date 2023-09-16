let magicianNames : string[] =["Pagal", "Denga", "Motu"]; 

show_magicians(magicianNames);

let ModifymagicianNames = make_great(magicianNames);

show_magicians(ModifymagicianNames);


 function make_great(magicians: string[]): string[]
  {

    let modifyMagicianNames=[...magicians];
    
    for (let i=0;i<magicians.length;i++){
      
      magicians[i]=`Great ${magicians[i]}`;
    }
    return modifyMagicianNames;
 }

 function show_magicians ( magicians: string[]): void
{
  for(const magician of magicians){
      console.log(magician);
  };
}