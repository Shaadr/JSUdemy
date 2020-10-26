let temp = -55;

if (temp > 32 && temp < 60) {
    console.log('feelsnice')
} else if (temp <= 0 || temp >= 120) {
    console.log('nope')
} else {
    console.log('pretty cold')
}

//challenge

let isGuest1Vegan = true; 
let isGuest2Vegan = false;

if (isGuest1Vegan && isGuest2Vegan) { 
    console.log('only vegan')
} else if (isGuest1Vegan || isGuest2Vegan) {
    console.log('some vegan')
} else {
    console.log('anything on menu')
}