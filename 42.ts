const magicianNames : string[] =["Pagal","Biryani","Kagu"] 

showMagicians(magicianNames);

function showMagicians(magicians: string[])
{
    function make_great(){
        for(const magicians of magicianNames){
            console.log(`Great ${magicians}`);
        }
    }
}