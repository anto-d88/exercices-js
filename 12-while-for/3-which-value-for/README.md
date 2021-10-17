importance: 4

---

# Quelles valeurs sont affichées par la boucle "for" ?

Pour chaque boucle, notez les valeurs qui vont s'afficher. Ensuite, comparez avec la réponse.

Les deux boucles `alert` les mêmes valeurs ou pas ? OUI

1. La forme postfix :

    ```js
    for (let i = 0; i < 5; i++) alert( i );
    ```
    0,1,2,3,4
2. La forme préfix :

    ```js
    for (let i = 0; i < 5; ++i) alert( i );
    ```
    0,1,2,3,4
