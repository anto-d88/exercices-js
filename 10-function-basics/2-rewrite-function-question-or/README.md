importance: 4

---

# Réécrivez la fonction en utilisant '?' ou '||'

La fonction suivante renvoie `true` si le paramètre `age` est supérieur à `18`.

Sinon, il demande une confirmation et renvoie le résultat.

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```

Réécrivez-le, pour effectuer la même chose, mais sans `if`, et en une seule ligne.

Faites deux variantes de `checkAge` :

1. En utilisant un opérateur point d'interrogation `?`

function checkAge(age) {

  return (age > 18) ? true : confirm('Did parents allow you?');
}
2. En utilisant OU `||`

fuction checkAge(age) {

  return (age > 18 ) || confirm('Dit parents allow you?);
}
