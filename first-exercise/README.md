Descripción
1. Crea una web que pida por medio de un prompt, una frase al usuario  y devuelva el mismo mensaje encriptado según el algoritmo de cifrado cesar con el parámetro de desplazamiento de 33 espacios hacia la derecha.
a. El programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar (x-n)%26
b. Tu código  debe estar compuesto por dos funciones con los siguientes nombres: cipher y decipher.
c. El usuario no debe poder ingresar un campo vacío o que contenga números.

Pseudocódigo

1. La función denominada cipher que recibe un parámetro llamado text.
2. A la variable text se le asigna un prompt para preguntarle una frase al usuario.
3. Se declara una variable userText en donde se almacenará el texto cifrado para retornar.
4. Para (la variable i que inicializa en 0 donde i debe ser menor que la longitud del text  y más un incremento.
5. Se declara una nueva variable llamada charact en donde le asigno el text.charCodeAt(i) con el fin de obtener el código ascii del carácter en el índice especificado.
6. Si(el charact es mayor o igual a 48 y menor igual a 57 ) entonces no puedes ingresar números.
7. Si (el charact es mayor o igual a 97 y  menor o igual a 122) entonces a el userText se le asignará un String.fromCharCode y el charact junto con la fórmula correspondiente (x-97+33)% 26 +97)con el fin de obtener los valores ascii en minúsculas.
8. Si (el charact es mayor o igual que 65 y es menor o igual que 90) entonces a el userText se le asignará un String.fromCharCode y el charact junto con la fórmula correspondiente (x-65+33) % 26 +65) con el fin de obtener los valores ascii en mayúsculas.
9. Si no(convertir los otros valores ascii en otros carácteres).
10. Retornar el userText.
11. Creamos una function llamada decipher que recibe un parámetro llamado userText.
12. Se declara una variable text en donde se almacenará el texto descifrado para retornar.
13. Para (la variable i que inicializa en 0 donde i debe ser menor que la longitud del userText  y más un incremento.
14. Se declara una nueva variable llamada userCharacter en donde le asigno el userText.charCodeAt(i) con el fin de obtener el código ascii del carácter en el índice especificado.
15. Si (el userCharacter es mayor o igual a 97 y  menor o igual a 122) entonces a el text se le asignará un String.fromCharCode y el userCharacter junto con la fórmula correspondiente (x-97-33+26)% 26 +97)con el fin de obtener los valores ascii en minúsculas.
16. Si (el charact es mayor o igual que 65 y es menor o igual que 90) entonces a el text se le asignará un String.fromCharCode y el userCharacter junto con la fórmula correspondiente (x-65-33+26) % 26 +65) con el fin de obtener los valores ascii en mayúsculas.
17. Si no(convertir otros valores ascii en otros carácteres).
18. Retornar el text.

![Esta es la imagen del diagrama](ciphercesar.jpeg)
