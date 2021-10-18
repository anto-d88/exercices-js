importance: 4

---

# Fonction pow(x,n)

Ecrivez une fonction `pow(x, n)` qui renvoie `x` à la puissance `n`. Ou, autrement dit, multiplie `x` par lui-même `n` fois et renvoie le résultat.

```js
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```

Créez une page Web qui demande (`prompt`)`x` et `n`, puis affiche le résultat de `pow(x, n)`.

[demo]

P.S. Dans cette tâche, la fonction ne doit prendre en charge que les valeurs naturelles de `n` : entiers supérieurs à `1`.

let x = prompt("x?","");

let n = prompt("n?","");

    if (n < 1) {

        alert( invalid );
    } else {
        alert( pow(x, n));
    }

function pow(x, n) {

    let resultat = x;

    for (let i = 1; i < n ; ++) {

        resultat *= x; 
    }

    return resultat;
}

