alert("ax^2+bx+c=0");
let a = prompt("Enter a");
let b = prompt("Enter b");
let c = prompt("Enter c");
let D = b*b-4*a*c;
alert("D="+b+"^2-4"+a+c+"="+D);
if (D>0)
{
    let x1 = (-b + Math.sqrt(D))/(2*a);
    let x2 = (-b - Math.sqrt(D))/(2*a);
    alert("x1 = "+x1+"; x2 = "+x2);
}
else if (D==0)
{
let x = -b/(2*a);
alert("x = "+x);
}
else
alert("Expression has no roots");
