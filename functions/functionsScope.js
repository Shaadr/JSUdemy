//Global Scope (convertFahrenheightToCelsius, c1, c2)
    //Local Scope of function convertFahrenheightToCelcius (f , c)
        // Local Scope of if-statementinside function (isFreezing)

function convertFahrenheithToCelsius(f) {
    let c = (f - 32) / 1.8

    if (c < 0) {
        let isFreezing = true;
    }

    return c;
}

let c1 = convertFahrenheithToCelsius(32);
let c2 = convertFahrenheithToCelsius(68);

console.log(c1)
console.log(c2)