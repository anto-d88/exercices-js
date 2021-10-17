# Nullish coalescing operator '??'


## Quelle est la valeur de retour ce code ?

```js
let banane;

alert(banane ?? "pomme");

pomme
```

## Quelle est la valeur de retour ce code ?

```js
let banane = "Trop bon";

alert(banane ?? "pomme");

Trop bon
```

# Comparison with "||"

```js
let pomme = null;
let poire = "Trop bon !";
let banane = null;


alert(pomme || poire || banane || "pas bon.");
```
Trop bon !


## Après avoir effectué les exercices précédent pouvez vous dire:

### Ce que retourne, par définition, l'opérateur "||" ?

|| renvoie le premier argument true.

### Ce que retourne, par définition, l'opérateur "??" ?

?? renvoie le premier argument qui n'est pas null ou undefined .


# Precedence

### Des deux opérateurs du dessus, lequelle à la plus grande précédence (prioritée) ?

||

### Faut il:

 #### ne jamais utiliser ??? avec tous les autres opérateurs ? V


### Que retournent les opérations suivantes (se référer au opérateurs logiques) ?

```js
let fruit = "poire" && "pomme" ?? "banane"
```
error

```js
let fruit = ("poire" && "pomme") ?? "banane"

alert(fruit)

```
pomme