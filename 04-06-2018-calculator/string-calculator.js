function addString(string) {
    var spited = string.split(',');
    var arr = [];

    for (var i = 0; i < spited.length; i++) {
        arr.push(spited[i])
        if (arr[i] == "") {
            return 0;
        };
    }
    var sum = arr.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });


    return sum;
}

console.log(addString("1,2"))
module.exports={addString}