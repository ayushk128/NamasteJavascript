// Closures
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// Assigning functions to a variable
// function x() {
//     var a = function y() {
//         console.log(a);
//     };
//     a();
// }
// x();

// Passing function as a variable to another function
// function x() {
//     var a = 7;
//     y();
// }
// x(function y() {
//     console.log(a);
// });

// We can also return a function
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;    //it returns the whole closure, not only value but closure/lexical env also
// }
// var z = x();  //x's lexical scope is gone now, but all the values of x's lexical scope is present in z;
// console.log(z);
// z();

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
//     a = 100;  //Will change the reference, not value only
//     return y; 
// }
// var z = x();  
// console.log(z);
// z();


function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y(); 
    }
    x();
}
z();