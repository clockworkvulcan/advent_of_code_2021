var inputString="22/n30/n20";
var inputArray = inputString.split("/n");
var increase = "";
for (var i = 1; i < inputArray.length; i++) {
    if ((inputArray[i]-inputArray[i-1]) > 0) {
        increase = (increase + 1);
    }
}
console.log(increase);