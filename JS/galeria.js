var lista = [];
lista.push("../imagens/banner/sonic.jpg");
lista.push("../imagens/banner/drestranho.jpg");
lista.push("../imagens/banner/homemaranha.jpg");
lista.push("../imagens/banner/jujutsukaisen.jpg");
lista.push("../imagens/banner/morbius.jpg");
lista.push("../imagens/banner/thebatman.jpg");
lista.push("../imagens/banner/avatar2.jpg");
var p = [];
p.push("Sonic 2 - O filme");
p.push("Doutor Estranho no Multiverso da Loucura");
p.push("Homem-Aranha: Sem Volta para Casa");
p.push("Jujutsu Kaisen 0");
p.push("Morbius");
p.push("The Batman");
p.push("Avatar 2");
var i = 0;
function anterior(){
    if(i<=0){
        i = lista.length-1;
    }else{
        i--; 
    }
    document.getElementById("img").src = lista[i];
    document.getElementById("titulo").innerHTML = p[i];
}
function proximo(){
    if(i == lista.length-1){
        i = 0;
    }else{
        i++;
    }
    document.getElementById("img").src = lista[i];
    document.getElementById("titulo").innerHTML = p[i];
    ;
}