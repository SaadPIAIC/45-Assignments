const user_names1:string[] = ['admin','Abid','Hassaan','Abdullah'];

for (const hello_user of user_names1){
    if (hello_user.toUpperCase()!="ADMIN"){
        console.log(`Hello ${hello_user} Thank's For Logging Again.`);
    }

    else if (hello_user.toLowerCase()=="admin"){
        console.log(`Hello Admin Wou'ld You Like To See The Status Report?`);
    }
}

