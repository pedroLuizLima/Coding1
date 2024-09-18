//definir notas
let nota1 = parseInt(Math.random() * 10 + 1);
let nota2 = parseInt(Math.random() * 10 + 1);
let nota3 = parseInt(Math.random() * 10 + 1);

//calculo da media
let media = (nota1 + nota2 + nota3) / 3

//ver se a media aprova ou reprova o aluno
if(media >= 7){
    console.log (`Com as notas ${nota1}, ${nota2}, ${nota3}; o aluno foi aprovado com média ${media}!!!`);
} 
else{
    console.log (`Com as notas ${nota1}, ${nota2}, ${nota3}; o aluno foi reprovado com média ${media}.`);
}