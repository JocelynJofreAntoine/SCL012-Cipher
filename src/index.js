// Declaración de Variables

const btnDecod =document.getElementById ("button-deco");
const btnCod =document.getElementById ("button-cod");
const mnsj =document.getElementById ("root");

//Función Codificar

btnCod.addEventListener("click", () => {
    let txtCod= document.getElementById ("texto1").value;
    let offset = document.getElementById ("offset").value;

    mnsj.innerHTML = cipher.encode (txtCod, offset);
   
});


//Función Decodificar

btnDecod.addEventListener("click", () => {
    let txtDeco= document.getElementById ("texto2").value;
    let offset= document.getElementById ("offset").value;

    mnsj.innerHTML = cipher.decode (txtDeco, offset);
    
});


