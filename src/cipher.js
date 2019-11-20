window.cipher = {
  
     //CODIFICADO
  
  encode: (txtCod, offset) => {
    //codigo cifrado
    let resultCode = "";
    for (let i = 0; i < txtCod.length; i++) {
      let ascii = txtCod.charCodeAt(i);
     
      // String mayusculas Codificado
      if (ascii >= 65 && ascii <= 90) {
        let code = (ascii - 65 + parseInt(offset)) % 26 + 65;
        resultCode += String.fromCharCode(code);
        
      }

      //String minusculas Codificado
      if (ascii >= 97 && ascii <= 122) {
        let code = (ascii - 97 + parseInt(offset)) % 26 + 97;
        resultCode += String.fromCharCode(code);
        
      }

      //String números Codificado
      if (ascii >= 48 && ascii <= 57) {
        let code = (ascii - 48 + parseInt(offset)) % 10 + 48;
        resultCode += String.fromCharCode(code);
        
      }

      //String espacios
      if (ascii >= 32 && ascii <= 32) {
        let code = (ascii - 32 + parseInt(offset)) % 1 + 32;
        resultCode += String.fromCharCode(code);
        
      }
    }  
    return resultCode;
  },


       //DECODIFICADO
       
  decode: (txtDeco, offset) => {
     //codigo descifrado
    let resultDeco = "";
    for (let i = 0; i < txtDeco.length; i++) {
      let asciiDeco = txtDeco.charCodeAt(i);


      //String mayusculas Decodificado
      if (asciiDeco >=65 && asciiDeco <=90) {
       let deco = (asciiDeco - 65 - parseInt(offset)) % 26 + 65;
       resultDeco += String.fromCharCode(deco);
      
      }

      //String minusculas Decodificado
      if (asciiDeco >=97 && asciiDeco <=122) {
        let deco = (asciiDeco - 97 - parseInt(offset)) % 26 + 97;
        resultDeco += String.fromCharCode(deco);
       
       }

       //String números Decodificado
      if (asciiDeco >=48 && asciiDeco <=57) {
        let deco = (asciiDeco - 48 - parseInt(offset)) % 10 + 48;
        resultDeco += String.fromCharCode(deco);
       
       }
 
       //String espacios
      if (asciiDeco >=32 && asciiDeco <=32) {
        let deco = (asciiDeco - 32 - parseInt(offset)) % 1 + 32;
        resultDeco += String.fromCharCode(deco);
       
       }
    }
    return resultDeco;
  }
};

