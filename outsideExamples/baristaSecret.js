const prompt = require('prompt-sync')();

let your_drink;
your_drink = "coffee"
//your_drink = prompt('What would you like to drink? ');

var reverse = function(s) {
    return s.split("").reverse().join("");
}

var barista = {
    str1: "ion",
    str2: reverse("rcne"),
    str3: "ypt",
    request: function(preference) {
        return preference + " secret word: " + this.str2 + this.str3 + this.str1;
    }

};



var secret = barista.request(your_drink)
console.log(secret)