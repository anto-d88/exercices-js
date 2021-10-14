importance: 4

---

# Est-ce que "else" est requis ?  

La fonction suivante renvoie `true` si le paramètre `age` est supérieur à `18`.

Sinon, il demande une confirmation et renvoie son résultat :

```js
function checkAge(age) {
  if (age > 18) {
    return true;
*!*
  } else {
    // si else n'est pas la , ont va quand même retourner la confirmation si-dessous
    return confirm('Did parents allow you?');
  }
*/!*
}
```

La fonction fonctionnera-t-elle différemment si `else` est supprimé ? 

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
*!*
  // else n'est pas obligatoir pour returner confirm si-dessous
  return confirm('Did parents allow you?');
*/!*
}
```

Existe-t-il une différence dans le comportement de ces deux variantes ? 
