function isValidCard(numberCard){
  numberCard= prompt('Write a number creditcard ');
  code=numbercard.length-1;
  for(var i=code;i>=0;i--){
    parseInt(numberCard[i]);
  }
}
