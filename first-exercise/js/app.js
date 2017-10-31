function cipher(text){
  text= prompt('Escriba una frase');
  var userText='';
  for(var i=0; i<text.length; i++){
      var charact= text.charCodeAt(i);
      if(charact>=48 && charact<=57){
      alert('No puedes ingresar números');
       } else if( charact >= 97 && charact <=122){
         userText += String.fromCharCode((charact- 97+33) % 26 +97);
       } else if(charact>=65 && charact <=90){
         userText+= String.fromCharCode((charact-65+33) % 26 +65);
       } else{
         userText+= String.fromCharCode(charact);
    }
  }
  return userText;
}

function decipher(userText){
   var text= '';
  for (var i=0; i<userText.length; i++){
      var userCharacter=userText.charCodeAt(i);
      if(userCharacter >= 97 && userCharacter <=122){
      text += String.fromCharCode((userCharacter-97-33+26) % 26+97);
    } else if(userCharacter>=65 && userCharacter <=90){
      text += String.fromCharCode((userCharacter-65-33+26) % 26+65);
    } else{
      text += String.fromCharCode(userCharacter);
    }
  }
  return text;
}
