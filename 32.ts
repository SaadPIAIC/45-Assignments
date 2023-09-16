let current_users = ["Saad","Abid","Hassaan","Abdullah","Ali"];
let new_users = ["Saad Abid","abid","Hassaan Abid","Abdullah","Ali Asad"];

for(const add of new_users){
    if(add.toUpperCase()==current_users[0].toUpperCase() || add.toUpperCase()==current_users[1].toUpperCase() || add.toUpperCase()==current_users[2].toUpperCase() || add.toUpperCase()==current_users[3].toUpperCase()|| add.toUpperCase()==current_users[4].toUpperCase()){
        console.log(`User Already Named Use Another Name. Name : ${add}`);
    }
    else{
        console.log(`User Is Available. User Succesfully Added. User : ${add}`);
    }
}