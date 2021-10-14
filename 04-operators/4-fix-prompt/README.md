importance: 5

---

# Corrigez l'addition

Voici un code qui demande à l'utilisateur deux nombres et affiche leur somme.

Cela ne fonctionne pas correctement. La sortie dans l'exemple ci-dessous est `12` (pour les valeurs d'invite par défaut).

Pourquoi ? Réparez-le. Le résultat doit être `3`.

```js run
let a = prompt("First number?", 1);   // si il y a un string , le resulta de 
let b = prompt("Second number?", 2);  //l'addition sera toujours string , il fautdonc les convertir // 

alert(+a + +b); // 3    
```
