const magicianNames : string[] =["Pagal","Biryani","Kagu"] 

showMagicians(magicianNames);

function showMagicians(magicians: string[])
{
  for(const magician of magicianNames){
    console.log(magician);
  }
}