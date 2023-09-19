// Block scope and shadowing
// var a = 100
// {
//     var a = 10;
//     let b = 15;
//     const c = 20;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

let b = 100
{
    var a = 10;
    let b = 15;
    const c = 20;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);