const prompt = require('prompt-sync')();

console.log("\n\n################### 1ª QUESTÃO - RODÍZIO DE PLACA #####################");
//1) Com base nas informações abaixo sobre o rodízio de veículos, faça um programa em JavaScript, utilizando o Node.js, que receba via linha de comando a placa de um determinado veículo e, baseado no dia da semana em que o programa está sendo executado, determine se esse veículo pode ou não estar em circulação. Para obter o dia da semana, pesquise sobre a classe Date do JavaScript. O rodízio SP pode parecer um pouco assustador à primeira vista, mas fique tranquilo, a regra para veículos em circulação é bem simples. A restrição da circulação de carros é feita de acordo com o final da placa do veículo e vale de segunda a sexta.Sendo assim, durante um dia por semana, cada veículo é proibido de circular no centro expandido durante seis horas, na parte da manhã e final da tarde.

dt = new Date;
//console.log("Hoje é " + dt.getDay() + ", " + 
//dt.getDate() + " de " + dt.getMonth() + " de " + dt.getFullYear());
let dia = dt.getDay();
console.log("Dia: " + dt.getDay());
// let dia = 2; // Para teste
// console.log("Dia: " + dia); // Para teste

switch (dia) {
    case 1:
        console.log("Hoje é Segunda: Proibido veículos com placa final 1 e 2");
        break;
    case 2:
        console.log("Hoje é Terça: Proibido veículos com placa final 3 e 4");
        break;
    case 3:
        console.log("Hoje é Quarta: Proibido veículos com placa final 5 e 6");
        break;
    case 4:
        console.log("Hoje é Quinta: Proibido veículos com placa final 7 e 8");
        break;
    case 5:
        console.log("Hoje é Sexta: Proibido veículos com placa final 9 e 0");
        break;
    default:
        console.log("Dias de Sábado e Domingo, todos os veículos são liberados!");
        break;
}

// SEG: 1-2, TER: 3-4, QUA: 5-6, QUI: 7-8, SEX: 9-0
//   day1   -  day2  -   day3   -   day4  -   day5

// FDS
if (dia == 0 || dia == 6) {
    console.log("Nem precisa fornecer a placa!");
} else {
    let placa = prompt(`Insira a placa do seu veículo: `);
    let finalDaPlaca = parseInt(placa[placa.length - 1]);
    console.log(`\nFinal da placa: ${finalDaPlaca}\n`);

    // SEGUNDA: 1-2
    if (finalDaPlaca == 1 || finalDaPlaca == 2) {
        if (dia == 1) {
            console.log("Seu veículo é PROIBIDO de circular no Centro hj!\n");
        }
        else {
            console.log("Seu veículo está liberado!\n");
        }
    }

    // TERÇA: 3-4
    if (finalDaPlaca == 3 || finalDaPlaca == 4) {
        if (dia == 2) {
            console.log("Seu veículo é PROIBIDO de circular no Centro hj!\n");
        }
        else {
            console.log("Seu veículo está liberado!\n");
        }
    }

    // QUARTA: 5-6
    if (finalDaPlaca == 5 || finalDaPlaca == 6) {
        if (dia == 3) {
            console.log("Seu veículo é PROIBIDO de circular no Centro hj!\n");
        }
        else {
            console.log("Seu veículo está liberado!\n");
        }
    }

    // QUINTA: 7-8
    if (finalDaPlaca == 7 || finalDaPlaca == 8) {
        if (dia == 4) {
            console.log("Seu veículo é PROIBIDO de circular no Centro hj!\n");
        }
        else {
            console.log("Seu veículo está liberado!\n");
        }
    }

    // SEXTA: 9-0
    if (finalDaPlaca == 9 || finalDaPlaca == 0) {
        if (dia == 5) {
            console.log("Seu veículo é PROIBIDO de circular no Centro hj!\n");
        }
        else {
            console.log("Seu veículo está liberado!\n");
        }
    }
}


console.log("\n\n################### 2ª QUESTÃO - DATA POR EXTENSO #####################");
//2) Faça um programa em JavaScript utilizando o Node.js que receba, via linha de comando, uma data no formato DD / MM / AAAA, e em seguida escreva essa data por extenso.Por exemplo, se a entrada for "11/01/2023", a saída deve ser "11 de janeiro de 2023".
// Coleta de data
let data = prompt(`Insira uma data no formato DD/MM/AAAA: `);

// Transformação de data em array
console.log(data.split('/'));
let dataArray = data.split('/');

// Convertendo array de STRINGS em array de NÚMEROS
var dataInteiro = dataArray.map(Number);
console.log(dataInteiro);

// Acessando o 2º valor(Mês) do array
console.log("Número do Mês: " + dataInteiro[1]);
let mes = dataInteiro[1];

// Convertendo o Mês
if (mes == 1) {
    mes = "Janeiro";
} else if (mes == 2) {
    mes = "Fevereiro";
} else if (mes == 3) {
    mes = "Março";
} else if (mes == 4) {
    mes = "Abril";
} else if (mes == 5) {
    mes = "Maio";
} else if (mes == 6) {
    mes = "Junho";
} else if (mes == 7) {
    mes = "Julho";
} else if (mes == 8) {
    mes = "Agosto";
} else if (mes == 9) {
    mes = "Setembro";
} else if (mes == 10) {
    mes = "Outubro";
} else if (mes == 11) {
    mes = "Novembro";
} else if (mes == 12) {
    mes = "Dezembro";
} else {
    console.log("Mês inválido");
}

// Impressão do resultado
console.log(`A data é: ${dataInteiro[0]} de ${mes} de ${dataInteiro[2]}`);


console.log("\n\n################# 3ª QUESTÃO - CALCULADORA (DIVISÃO) ###################");
//3) Faça um programa em JavaScript, utilizando o Node.js que receba dois números via terminal e faça a divisão do primeiro com o segundo número. Se o segundo número for 0, o programa não pode fazer o cálculo e deve avisar ao usuário que houve o erro "Divisão por zero". Para isso, você deve usar o tratamento de exceções (try...catch) para capturar o erro e informar ao usuário.
var num1 = parseInt(prompt(`Insira o 1º número: `));

try {
    var num2 = parseInt(prompt(`Insira o 2º número: `));
    if (num2 == 0) {
        throw new Error('Divisão por zero');
    }
    console.log('O valor da divisão é: ' + (num1 / num2));
} catch (ocorrencia) {
    console.log(ocorrencia.message);
}


console.log("\n\n######### 4ª QUESTÃO - Criação de JSON e conversão em array ###########");
//4) Escreva um arquivo JSON manualmente com os seguintes dados de pessoas fictícias: Nome completo, Endereço, Nacionalidade, Idade e Sexo. O arquivo deve ter os dados de, no mínimo, 10 pessoas. Após isso, em um programa feito em JavaScript utilizando o Node.js, converta esse arquivo JSON que você acabou de criar em um array e imprima-o na tela.
var comecar = prompt(`Pressione Enter para mostrar!`);
const fs = require('fs');

var dados = fs.readFileSync('./arquivo.json', 'utf-8');
console.log(dados + "\n\n");
// json -> js
var arquivo = JSON.parse(dados);
console.log(arquivo + "\n\n");
var pessoas = arquivo.pessoas;
console.log(pessoas);