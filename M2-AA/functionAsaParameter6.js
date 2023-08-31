var age = 10;

const displayGreetings = function(name,year){
    console.log(`Happy new year ${year} ${name}`)
}

const displayGreetingsWithEmoji = function(name, year){
    console.log( `😄 😄 Happy new year ${year} ${name} 😄 😄  `);
}

const greet = function(name, year, func){
    func(name, year);
}

greet('Harini',2023, displayGreetingsWithEmoji);
greet('Dheeraj',2023, displayGreetings);