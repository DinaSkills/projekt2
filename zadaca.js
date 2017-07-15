 var tezina = prompt("Unesite svoju tezinu");
 var visina = prompt ("Unesite svoju tezinu");
 
tezina = parseInt(tezina);
visina = parseFloat(visina);

var BMI = tezina/(visina * visina);

console.log ("Vaš indeks tjelesne težine " + BMI);

if(BMI < 15){   
console.log ("Vrlo ozbiljna pothranjenost");
}

else if(BMI >= 15 && BMI < 16){
    console.log ("Ozbiljna pothranjenost");
}
else if (BMI >=16 && BMI < 18.5){
    console.log ("Pothranjenost");
        
}
else if(BMI >18.5 && BMI < 25){
    console.log ("Normalna tezina");
}
else if(BMI >= 25 && BMI < 30){
    console.log ("Normalna tezina");
}
else if(BMI >= 30 && BMI < 35 ){
    console.log ("Klasa gojaznosti 1");
}

else if(BMI >= 35 && BMI < 40 ){
    console.log ("Klasa gojaznosti 2");
}

else {
    console.log ("Klasa gojaznosti 3");
}



