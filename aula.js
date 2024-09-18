var prompt = require('prompt-sync')();

let nome = prompt("Qual o seu nome?");
console.log(`Olá ${nome}, bem vindo à Faculdade Senac.`);
console.log(`Você está aqui para fazer sua matrícula.`);
let curso = prompt("Qual curso você deseja cursar?");
console.log(`Para realizar sua matrícula no curso de ${curso}, você precisa me informar seu CPF, seu nome completo e sua idade.`);
let CPF = prompt("Insira seu CPF:");
let nomeCompleto = prompt("Insira seu nome completo:");
let idade = prompt("Insira sua idade:");
console.log(`Ok ${nome}, seu nome completo é ${nomeCompleto}, você tem ${idade} anos e seu CPF é ${CPF}. Com esses dados farei sua matricula no curso de ${curso}.`);
console.log(`Parabéns ${nome}, sua matrícula foi feita com sucesso!`);