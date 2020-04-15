var cpnjCliente;
var cpnj12;
var cpnj13;
var contagem1 = 10;
var contagem2 = 11;
var resto = 0;
var rs1 = 0;
var rs2 = 0;
var cpnjfinal;

cpnjCliente = prompt("Informe o seu CPNJ");
cpnj12 = cpnjCliente.substring(0, 12);

for (var i = 0; i < cpnj12.length; i++) {
  rs1 += cpnj12[i] * contagem1;

  contagem1--;
}

resto = rs1 % 11;

if (resto < 2) cpnj13 = cpnj12 + "0";
else cpnj13 = cpnj12 + "" + (11 - resto);

for (var i = 0; i < cpnj13.length; i++) {
  rs2 += cpnj13[i] * contagem2;
  contagem2--;
}

resto = rs2 % 11;
if (resto < 2) cpnjfinal = cpnj13 + "0";
else cpnjfinal = cpnj13 + "" + (11 - resto);

if (cpnjCliente == cpnjfinal) {
  alert("CPNJ Válido");
} else {
  alert("CPNJ inválido");
}
