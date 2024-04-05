alert("Bem vindo ao senac - Tito");



        var titulo;    
        var nome, aula;    

        //Atribuido valores a variaveis <- aqui no JS =

        titulo= "construindo JS";
        nome="Fernando";

        aula = new String ("01");

        document.write("<br>Meu nome e" + nome); 
        alert(titulo + "" + nome + "" + aula); 

        var a,b,c;

        a= 5;
        b= "numero 6";
        b= 6;
        c= a / b;
        c ++;
        ++c;

        c= 44.92;
        // valor inteiro do numero
        document.write("<br> valor inteiro de c é" + parseInt(c));
        // valor flutuante do numero
        document.write("<br> valor inteiro de C é" + parseFloat(c)); 

        d = c % 1;   

        document.write("<br> valor da fração de C é " + d);       

        aux = Math.floor(c);
        resto = c - aux;
        document.write("<br> valor da fração é: " + resto);
        //usando expressao regular
        c = parseInt(/^[0-9]*?(?:[\.,])([0-9]*?)$/g.exec(c.toString())[1]);
        
        document.write("<br> valor da fração de C é: " + c);    
            
        /* trabalhando com texto */
        //convertendo letras em maiusculos
            
        document.write("<br>" + nome.toUpperCase());

        //convertendo letras em minusculos

        document.write("<br>" + titulo.toLowerCase());  

        // quantidade de carectere em um string
        document.write("Quantidade de caracter do meu nome: " + nome.length); 

        pais = "Brasil";    
        cnpj = "11133366622278";    

        //tras os caracter a part:    
        document.write("<br>" + pais.substring(2,4));   

        document.write("<br>CNPJ:" + cnpj,substr(0,2) + "." + cnpj.substr(2,3) + "." + cnpj.substr(5,3) + "/" + cnpj.substr(8,4) + "-" + cnpj.substr(12,2) );


