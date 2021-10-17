importance: 4

---

# Quelles valeurs affiche la boucle while ?

A votre avis, quelles sont les valeurs affichées pour chaque boucle ?  Notez-les puis comparer avec la réponse.

Les deux boucles affichent-elles les mêmes valeurs dans l'`alert` ou pas ? NON

1. Le préfixe sous forme `++i` :

    ```js
    let i = 0;
    while (++i < 5) alert( i );
    1,2,3,4
    ```
2. Le postfixe sous forme `i++` :

    ```js
    let i = 0;
    while (i++ < 5) alert( i );
    1,2,3,4,5
    ```
