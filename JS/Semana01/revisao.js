var salarioBruto = 7500;
var ir = (salarioBruto / 100) * 10;
var salarioLiquido = salarioBruto - ir;

document.write("Salário Líquido: R$ ", salarioLiquido);
document.write("<br>");

var n1 = 10;
var n2 = "10";
document.write(n1 == n2);
document.write("<br>");


var n1 = 10;
var n2 = 20;
var n3 = 3;
document.write(n1 ** n3 + n2);
document.write("<br>");


var n1 = 10;
var n2 = 20;
var n3 = "10";
document.write((n1 === n3) && !(n1 < n2));
