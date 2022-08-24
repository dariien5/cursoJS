
//ejercicio usando ciclos repetitivos hacer tabla de multiplicar donde por dos variables desde donde hasta donde va a llegar
let x = parseInt(prompt('valor uno'));
let y = parseInt(prompt('valor dos'));

if (x<y) {
    while(x<=y){
        console.log("la tabla del " + x + " es:")
        for (let i=1; i<11; i++){
            console.log(i * x);
        }
        x ++    
    }
}

else if (x>y) {
    while(x>=y){
        console.log("la tabla del " + y + " es:")
        for (let i=1; i<11; i++){
            console.log(i * y);
        }
        y ++    
    }
}


