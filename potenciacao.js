function potencia(base, expoente){
    if(expoente === 0){
        return 1;
    } 
    
    else{
        return base * potencia(base, expoente - 1);
    }
    
}

let resultado1 = potencia (3, 4);
let resultado2 = potencia (2, 5);

console.log(resultado1)
console.log(resultado2)