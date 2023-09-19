// Hoisting
console.log("Line 1");
function getName() {
    console.log("Namaste Javascript");
}
// var getName = () => {
//     console.log("Namaste Javascript");
// }
// var getName = function () {
//     console.log("Namaste Javascript");
// }

getName();
console.log(x);
console.log(getName);
var x = 7;