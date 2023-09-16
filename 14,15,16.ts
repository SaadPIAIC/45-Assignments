const Guests1:string[] = ['Mama','Papa','Hassaan','Abdullah','Zunaira'];

for (const guests1 of Guests1){
    console.log(`Dear ${guests1}, I Wou'ld Like To Invite You At My Party. Please Come To My Party.`);
}

const notGuests:string[]= ['Hassan','Abdullah'];

for (const NotGuests of notGuests){
    console.log(`${NotGuests} Can't Make It To The Party`);
}

const GuestsTrue:string[] = ['Ali','Mama','Papa','Yasir','Javed','Zunaira'];
GuestsTrue.push('Top G');

for (const TrueGuests of GuestsTrue){
    console.log(`${TrueGuests} Is Coming To The Party`);
}

const guestsStill:string[] = ['Mama','Papa','Zunaira'];

for (const stillGuests of guestsStill){
    console.log(`${stillGuests} Is Still In The List Of The Party.`);
}

let dinnerMsg=`${GuestsTrue.join(",")} I Found A Bigger Dinner Table`;

console.log(dinnerMsg);

let newGuests:string[] = ['Mama','Papa','Ali','Yasir','Javed','Zunaira'];

for (const newGuests1 of newGuests){
    console.log(`I Wou'ld Like You ${newGuests1} To Come At My Party Please?`);
}

console.log(`${newGuests.join(",")} There Is Only Space For Two People At My Table.`);

newGuests.pop();
newGuests.pop();
newGuests.pop();
newGuests.pop();

for (const NewGuests of newGuests){
    console.log(`${NewGuests} You Are Invited At My Dinner`);
}

newGuests.pop();
newGuests.pop();

console.log(`People I Have An Empty List In My Dinner List.`);

