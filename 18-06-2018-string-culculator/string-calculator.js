

function stringCulculation(string) {
    if (string == "") {
        return 0;
    } else {
        if (/(\d).(\d)/.exec(string) || /(-\d)/.exec(string)) {
            var numbers = string.match(/(-\d)|(\d)[.](\d)|(\d)(\d)|([0-9])/g);
        }
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0) {
                var message = `No negative numbers  allowed: ${numbers}`;
                throw Error(message);
            }
        }
        var sum = numbers.reduce(function (a, b) {
            return Number(a) + Number(b);
        });
        return sum;
    }
}


module.exports={stringCulculation}