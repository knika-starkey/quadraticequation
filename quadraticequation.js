alert("ax^2+bx+c=0");
let a = prompt("Enter a");
let b = prompt("Enter b");
let c = prompt("Enter c");
if (isNaN(a) || isNaN(b) || isNaN(c)) alert("It must be numbers");
else {
  if (a == 0) {
    let x = -c / b;
    alert("x = " + x);
  } else if (b == 0) {
    let x1 = Math.sqrt(-c / a);
    let x2 = Math.sqrt(c / a);
  } else {
    let D = b * b - 4 * a * c;
    alert("D=" + b + "^2-4" + a + c + "=" + D);
    if (D > 0) {
      let x1 = (-b + Math.sqrt(D)) / (2 * a);
      let x2 = (-b - Math.sqrt(D)) / (2 * a);
      alert("x1 = " + x1 + "; x2 = " + x2);
    } else if (D == 0) {
      let x = -b / (2 * a);
      alert("x = " + x);
    } else alert("Expression has no roots");
  }
}
