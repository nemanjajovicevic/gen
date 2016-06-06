function randomSymbolGenerator(chars, length, mainSymbol, timesToRepeat) {
    chars = chars.replace(mainSymbol, "");
    var pass = "";
    for (var x = 0; x < length - timesToRepeat; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i) + ",";
        if (countInArray(pass, chars.charAt(i)) > timesToRepeat - 1) {
            var one = pass.slice(0, -2);
            var test = firstNonRepeatedCharacter(one);
            pass = one;
            pass += chars.charAt(i).replace(chars.charAt(i), test + ",");
        }
    }
    function countInArray(pass, what) {
        var count = 0;
        for (var i = 0; i < pass.length; i++) {
            if (pass.charAt(i) === what) {
                count++;
            }
        }
        return count;
    }
    function firstNonRepeatedCharacter(string) {
        for (var m = 0; m < chars.length; m++) {
            var c = chars.charAt(m);
            if (string.indexOf(c) === -1) {
                return c;
            }
        }
        for (var p = 0; p < string.length; p++) {
            var k = string.charAt(p);
            if (string.indexOf(k) == p && string.indexOf(k, p + 1) == -1) {
                return k;
            }
        }
        return alert("Stop! There are no unique values!!!");
    }
    for (var y = 0; y < timesToRepeat; y++) {
        pass += mainSymbol + ",";
    }
    var temp = pass.slice(0, -1).split(',');
    var holder = shuffle(temp);
    return holder;
}

function shuffle(temp) {
var i = temp.length-1;
    for (i; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = temp[randomIndex];

        temp[randomIndex] = temp[i];
        temp[i] = itemAtIndex;
    }
    return temp;
}

// The idea of this script is to create an array of strings using input parameters.
// Main function can be used in a loop to get large amount of data.
console.log(randomSymbolGenerator("ABCDEF", 9, "A", 3));