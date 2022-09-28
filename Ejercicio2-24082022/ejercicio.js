
//ejercicio usando ciclos repetitivos hacer tabla de multiplicar donde por dos variables desde donde hasta donde va a llegar
let x = parseInt(prompt('valor uno'));
let y = parseInt(prompt('valor dos'));  

//function contar() {
    if (x<y) {
        while(x<=y){
            document.getElementById("subtitulo").innerHTML = "Las tabla de multiplicar son:";
            for (let i=1; i<11; i++){
                const lista = document.createElement("li");
                const textnode = document.createTextNode(x + "*" + i + "=" + x*i);
                lista.appendChild(textnode);
                document.getElementById("myList").appendChild(lista);       
            }
            x ++    
        }
    }
    
    else if (x>y) {
        while(x>=y){
            document.getElementById("subtitulo").innerHTML = "Las tabla de multiplicar son:";
            for (let i=1; i<11; i++){
                const lista = document.createElement("li");
                const textnode = document.createTextNode(y + "*" + i + "=" + y*i);
                lista.appendChild(textnode);
                document.getElementById("myList").appendChild(lista);       
            }
            y ++      
        }
    }
//}
