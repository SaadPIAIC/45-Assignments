let positions = [1,2,3,4,5,6,7,8,9];

for(const position of positions){
    if(position==1){
        console.log(`${position}st`);
    }
    else if(position==2){
        console.log(`${position}nd`);
    }
    else if(position==3){
        console.log(`${position}rd`);
    }
    else{
        console.log(`${position}th`);
    }
}