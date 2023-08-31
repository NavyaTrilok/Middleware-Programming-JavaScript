var age = 10;

const displayGreetings = function(name,year){
    console.log(`Happy new year ${year} ${name}`)
}

const displayGreetingsWithEmoji = function(name, year){
    console.log( `😄 😄 Happy new year ${year} ${name} 😄 😄  `);
}

var greet = {};

if(age>10){
    greet = displayGreetings;
}else{
    greet = displayGreetingsWithEmoji;
}

greet('Harini', 2022);