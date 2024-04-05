
//var diasemana = new Array(7);
//var diasemana = [7];
var diasemana=[];

//atribuindo valores ao vetor

diasemana[0] = "Domingo";
diasemana[1] = "Segunda";
diasemana[2] = "Terça-feira";
diasemana[3] = "Quarta";
diasemana[4] = "Quinta";
diasemana[5] = "Sexta";
diasemana[6] = "Sabado";

var hoje, xDia;

hoje = new Date();
xDia = hoje.getDay();

//xDia = 0;

document.write("<p> hoje é:" + diasemana[xDia] + "</p>");


//criando vetores de atribuição

var frutas = ["Banana", "laranja", "Morango", "Perâ", "Abacate", "Melão", "Siriguela"];

document.write("<p> Hoje minha fruta sera: " + frutas[xDia] + "</p>");

var preco = [
    3.0,
    4.40,
    5.20,
    3.00,
    3.50,
    5.00,
    6.75
];

document.write("<p> Valor Pago da fruta é: R$ " + preco[xDia] + "</p>");











/* Criando Objeto para manipular Matriz dentro do Js*/
//Criar função para o objeto matriz
function matriz_grupos(codigo,nome,preco){
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
}

grupos = new Array();
i = 0;
codigo = "1";
nome = "Banana"
preco = 3.30;
grupos[i] = new matriz_grupos(codigo, nome, preco);

i++;
codigo = "2";
nome = "pera";
preco = "10.00";
grupos[i] = new matriz_grupos(codigo, nome, preco);

i++;
codigo = "3";
nome = "Morango";
preco = "6.75";
grupos[i] = new matriz_grupos(codigo, nome, preco);

i++;
codigo = "4";
nome = "Abacaxi";
preco = "9.75";
grupos[i] = new matriz_grupos(codigo, nome, preco);

i++;
limite = grupos.length;

function posta(){

    dataGrid = "<table> <tr> <td>Codigo</td> <td>Produto</td> <td>Preço</td> </tr>";

    for(i=0;i<limite;i++){
        dataGrid = dataGrid +("<tr><td>" + grupos[i].codigo + "</td>");
        dataGrid += ("<td>" + grupos[i].nome + "</td>");
        dataGrid += ("<td>" + grupos[i].preco + "</td></tr>");
    }

    dataGrid +="</table>";

    var div = document.getElementById("resposta");
    //Inserindo o Datagrid na div   
    div.innerHTML = dataGrid;
}























/*

document.write("<table> <tr> <td> Codigo </td> <td>Produto</td> <td>Preço</td> </tr>");

for(i=0;i<limite;i++){
    document.write("<tr><td> " + grupos [i].codigo + "</td>");
    document.write("<td>" + grupos[i].nome + "</td>");
    document.write("<td>" + grupos[i].preco + "</td>");
}
document.write("</table>");
*/
